const { app, BrowserWindow  } = require('electron')
const handler = require('serve-handler')
const micro = require('micro')

app.on('ready', () => {
  let win = new BrowserWindow({
      width: 600,
      height: 600,
      frame: false
  })

  const server = micro(async (req, res) => {
    return await handler(req, res, {
      'public': 'app/build',
      'cleanUrls': true,
      'rewrites': [
        {
          'source': 'app/build/**',
          'destination': '/'
        }
      ]
    })
  })

  server.listen(1336)

  win.on('closed', () => win = null)

  win.loadURL('http://localhost:1336')
  // win.loadURL(`file://${__dirname}/app/build/index.html`)
})

