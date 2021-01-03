# Remember or Restore Cursor

remember & restore cursor/s position with ease.

> what problem does this fix ?

i usually run one or more linter on file-save through trmnl/cli "not a big fan of editor plugins", which might move the cursor all the way to the end of the file.

so out of frustration of having to relocate the cursor everytime that happens, now we can remember the position b4 the trmnl/cli run and restore it back when all are done.

# Notes

- after restore, remembered positions are cleared.
- u can use the ext with something like [macros](https://marketplace.visualstudio.com/items?itemName=ctf0.macros) to automatically save & restore cursor position each time you save a file ex.

    - settings

    ```jsonc
    "saveFile": [
        "src.remember",
        "workbench.action.files.save",
        {
            "command": "$delay",
            "args": {
                "delay": 1000 // change accroding to your need
            }
        },
        "src.restore"
    ],
    ```

    - keybinding

    ```json
    {
        "key": "cmd+s",
        "command": "macros.saveFile",
        "when": "editorFocus"
    },
    ```
