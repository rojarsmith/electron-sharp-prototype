const axios = require('axios');

function setupIpcHandlers(ipcMain, mainWindow) {
  setInterval(async () => {
    try {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
      const price = response.data.bpi.USD.rate;
      mainWindow.webContents.send('update-price', price);
    } catch (error) {
      console.error('Failed to fetch Bitcoin price:', error);
    }
  }, 1000);

  ipcMain.on('some-event', (event, data) => {
    console.log('Received event from renderer:', data);
  });
}

module.exports = { setupIpcHandlers };
