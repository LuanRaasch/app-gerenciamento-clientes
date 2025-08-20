import { BrowserWindow, app, globalShortcut } from "electron";

export function createShortcuts(window: BrowserWindow) {
    app.on("browser-window-focus", () => {
        globalShortcut.register("CommandOrControl+Shift+I", () => {
            window.webContents.toggleDevTools();
        });

        globalShortcut.register("CommandOrControl+R", () => {
            window.reload();
        });

        globalShortcut.register("CommandOrControl+Shift+R", () => {
            window.webContents.reloadIgnoringCache();
        });
    })

    app.on("browser-window-blur", () => {
        globalShortcut.unregisterAll();
    })
}