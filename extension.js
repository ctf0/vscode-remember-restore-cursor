const vscode = require('vscode')

let positions = {}

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
    context.subscriptions.push(
        vscode.commands.registerCommand('src.remember', () => {
            let editor                 = getEditor()
            let {selections, document} = editor

            positions = {
                file       : document.fileName,
                selections : selections
            }
        }),
        vscode.commands.registerCommand('src.restore', () => {
            let editor = getEditor()

            if (editor) {
                let file = positions.file == editor.document.fileName

                if (file) {
                    editor.selections = positions.selections
                }
            }

            positions = {}
        })
    )
}

function getEditor() {
    return vscode.window.activeTextEditor
}

exports.activate = activate

function deactivate() { }

module.exports = {
    activate,
    deactivate
}
