const { app, BrowserWindow } = require('electron')
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      width: 500,
      maxHeight :500
      //const toolbarRect = document.getElementById('toolbar').getBoundingClientRect()
      //win.setSheetOffset(toolbarRect.height)
      // // set the title bar style
      // titleBarStyle: 'hiddenInset',
      // // set the background color to black
      // backgroundColor: "#111",
      // // Don't show the window until it's ready, this prevents any white flickering
      // show: false

    })
    win.loadFile('BrowserWindow.html')
  //   win = new BrowserWindow({ width: 800, height: 600, 
  //     webPreferences: {
  //       nodeIntegration: true
  //     } 
  // })
  }
  app.whenReady().then(() => {
    createWindow()
  })

