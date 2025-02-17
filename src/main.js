const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const backengine = require('./backengine');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 480,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: true
        }
    })

    win.on('closed', () => {
        win = null;
    });

    win.loadURL('http://localhost:3000')

    backengine.setupIpcHandlers(ipcMain, win);

    // ipcMain.on("custom-event", (event, data) => {
    //     console.log("Received event in main process:", data);
    // });
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
