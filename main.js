const electron = require('electron');
const { app, BrowserWindow } = electron;

let win

app.on('ready', () => {
  win = new BrowserWindow();
  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', () => { win = null; });
});

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
          app.quit()
        
  };
});
