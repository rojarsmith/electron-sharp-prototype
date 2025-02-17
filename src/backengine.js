const axios = require('axios');
const dgram = require("dgram");

function setupIpcHandlers(ipcMain, mainWindow) {
  setInterval(async () => {
    try {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
      const price = response.data.bpi.USD.rate;
      // const response = ""
      // const price = 0;
      mainWindow.webContents.send('update-price', price);
    } catch (error) {
      console.error('Failed to fetch Bitcoin price:', error);
    }
  }, 1000);

  ipcMain.on('custom-event', (event, data) => {
    console.log('Received event from renderer:', data);
    const socket = dgram.createSocket("udp4");
    const DEVICE_IP = "192.168.122.74";
    const ECHONET_UDP_PORT = 3610;

    const HEADER = [0x10, 0x81, 0x06, 0x03]; // ECHONET Lite Header
    // const TID = [0x00, 0x01];
    const SEOJ = [0x05, 0xFF, 0x01];
    const DEOJ = [0x01, 0x30, 0x01];

    let ESV, EPC, EDT;

    if (data === "powerOn") {
        ESV = [0x61];  // `SETI`
        EPC = [0x80]; // 0x80 = switch
        EDT = [0x30]; // 0x30 = ON
    } else if (data === "powerOff") {
        ESV = [0x61];  // `SETI`
        EPC = [0x80]; // 0x80 = switch
        EDT = [0x31]; // 0x31 = OFF
    } else if (data === "setTemp10") {
        ESV = [0x61];  // `SETI`
        EPC = [0xB3]; // 0xB3 = temp
        EDT = [10];   // temp 10°C
    } else if (data === "setTemp30") {
        ESV = [0x61];  // `SETI`
        EPC = [0xB3]; // 0xB3 = temp
        EDT = [30];   // temp 30°C
    } else {
        console.error("unknown command:", data);
        return;
    }

    const packet = [...HEADER, ...SEOJ, ...DEOJ, ...ESV, 0x01, ...EPC, EDT.length, ...EDT];
    // const packet = [...HEADER, ...TID, ...SEOJ, ...DEOJ, ...ESV, 0x01, ...EPC, EDT.length, ...EDT];
    const buffer = Buffer.from(packet);

    socket.send(buffer, 0, buffer.length, ECHONET_UDP_PORT, DEVICE_IP, (err) => {
      if (err) console.error("UDP error:", err);
      else console.log("Send ECHONET success:", buffer.toString("hex"));
      socket.close();
  });
  });
}

module.exports = { setupIpcHandlers };
