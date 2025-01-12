const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('be_api', {
    onUpdatePrice: (callback) => ipcRenderer.on("update-price", callback),
    sendEvent: (channel, data) => ipcRenderer.send(channel, data),
});