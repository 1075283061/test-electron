//@ts-check
const { app,BrowserWindow } = require('electron')
app.on('ready',async()=>{
  let win = new BrowserWindow({ width:800, height:600, })
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})