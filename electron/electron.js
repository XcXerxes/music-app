/*
 * @Description: electron
 * @Author: leo
 * @Date: 2020-01-16 17:39:19
 * @LastEditors: leo
 * @LastEditTime: 2020-01-16 18:04:53
 */
const electron = require('electron')
const path = require('path')
const isDev= require('electron-is-dev')

const { app, BrowserWindow} = electron

let mainWindow

function  createWindow () {
  mainWindow = new BrowserWindow({ width: 1000, height: 680 })
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }
  mainWindow.on('closed', () => mainWindow = null)
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
