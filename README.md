# Tab Police

A VS Code extension that enforces a strict "no tabs" policy by preventing file saves and closes when tab characters are detected.

## Features

- Prevents saving files that contain tab characters
- Prevents closing files that contain tab characters
- Shows warning messages when tab characters are detected
- Automatically checks all open documents on startup

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to build the extension
4. Press F5 in VS Code to start debugging and test the extension

## Usage

The extension will automatically:
- Show a warning when you open a file containing tabs
- Prevent saving files that contain tabs
- Prevent closing files that contain tabs

To fix files with tabs:
1. Use VS Code's built-in "Convert Indentation to Spaces" command
2. Or manually replace tab characters with spaces
3. Then you'll be able to save and close the file

## Requirements

- VS Code 1.60.0 or higher

## Extension Settings

This extension contributes the following settings:

* No additional settings are required - it works out of the box!

## Known Issues

None at the moment.

## Release Notes

### 0.0.1

Initial release of Tab Police:
- Basic tab detection
- Save prevention
- Close prevention
- Warning messages