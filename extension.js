const vscode = require('vscode')
const PACKAGE_NAME = 'rememberRestoreCursor'

let config = {}
let positions = []

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
    await readConfig()

    vscode.workspace.onDidChangeConfiguration(async (e) => {
        if (e.affectsConfiguration(PACKAGE_NAME)) {
            await readConfig()
        }
    })

    context.subscriptions.push(
        vscode.commands.registerCommand('src.remember', () => {
            let editor = getEditor()
            let {selections} = editor

            positions = selections
        }),
        vscode.commands.registerCommand('src.restore', () => {
            let editor = getEditor()

            if (editor) {
                editor.selections = positions
            }

            positions = []
        })
    )
}

function getEditor() {
    return vscode.window.activeTextEditor
}

async function readConfig() {
    return config = await vscode.workspace.getConfiguration(PACKAGE_NAME)
}

exports.activate = activate

function deactivate() { }

module.exports = {
    activate,
    deactivate
}
