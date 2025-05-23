import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Register event handlers for document changes and save attempts
    const disposables = [
        vscode.workspace.onWillSaveTextDocument(handleWillSave),
        vscode.window.onDidChangeActiveTextEditor(handleEditorChange)
    ];

    context.subscriptions.push(...disposables);

    // Check all open documents on startup
    vscode.window.visibleTextEditors.forEach(editor => {
        checkForTabs(editor.document);
    });
}

function handleWillSave(event: vscode.TextDocumentWillSaveEvent) {
    const document = event.document;
    if (containsTabs(document)) {
        event.waitUntil(
            Promise.reject(new Error('Cannot save file: Tab characters detected!'))
        );
    }
}

function handleEditorChange(editor: vscode.TextEditor | undefined) {
    if (editor) {
        checkForTabs(editor.document);
    }
}

function checkForTabs(document: vscode.TextDocument) {
    if (containsTabs(document)) {
        vscode.window.showWarningMessage(
            `Warning: "${document.fileName}" contains tab characters!`
        );
    }
}

function containsTabs(document: vscode.TextDocument): boolean {
    const text = document.getText();
    return text.includes('\t');
}

export function deactivate() {}