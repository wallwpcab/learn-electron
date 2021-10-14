const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  
let win

// function createWindow() { 
//    win = new BrowserWindow({width: 800, height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//       enableRemoteModule: true,
//     },
//   });


app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/BrowserWindow.html`);
});

let win = new BrowserWindow({
  webPreferences: {
    nodeIntegration: true
  }
})
win.show()





//    win.loadURL(url.format ({ 
//       pathname: path.join(__dirname, 'BrowserWindow.html'), 
//       protocol: 'file:', 
//       slashes: true 
//    })) 
// }

mainWindow.loadURL('file://' + __dirname + '/index.html');


app.on('ready', () => {
  console.log('This is html');
  mainWindow = new BrowserWindow();
  mainWindow.webContents.loadFile('BrowserWindow.html'); 
 });




const fileName = 'recently-used.md'
fs.writeFile(fileName, 'Lorem Ipsum', () => {
  app.addRecentDocument(path.join(__dirname, fileName))
})


app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  app.clearRecentDocuments()
  if (process.platform !== 'darwin') {
    app.quit()
  }
})



app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})



const getFileFromUser = () => {
   const files = dialog.showOpenDialog({ 
   properties: ['openFile'] 
   });
   if (!files) { return; } 
   console.log(files); 
  };


  app.on('ready', () => { 
   console.log('Hello from Electron');
  });


  app.on('ready', () => {
   console.log('Hello from Electron.');
   mainWindow = new BrowserWindow();
   mainWindow.webContents.loadFile('BrowserWindow.html'); 
  });

 


// app.on('ready', createWindow) 
// //const {app} = require('electron');
// const newLocal = 'ready';
// app.on(newLocal, () => { 
//  console.log('Hello from Electron');
// });