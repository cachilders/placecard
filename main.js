const { app, BrowserWindow  } = require('electron')

app.on('ready', () => {
  let win = new BrowserWindow({
      width: 600,
      height: 600,
      frame: false
  })

  win.on('closed', () => win = null)

  win.loadURL(`file://${__dirname}/index.html`)
})

