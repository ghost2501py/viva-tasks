const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const Store = require('electron-store')

const store = new Store()

ipcMain.handle('getStoreValue', async (event, val) => {
  return store.get(val)
})

ipcMain.handle('setStoreValue', async (event, key, val) => {
  store.set(key, val)
})

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    title: 'Viva Tasks',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: __dirname + '/preload.js',
    },
  })

  win.on('page-title-updated', (e) => {
      e.preventDefault()
  })

  // and load the index.html of the app.
  // win.loadFile("index.html")
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' })
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bars to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
