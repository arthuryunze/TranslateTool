const { app, BrowserWindow } = require('electron')

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        x: 1140,
        y: 30,
        width: 400,
        height: 900,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    //菜单栏不可见
    win.setMenuBarVisibility(false)
    //加载网页
    // win.loadFile('index.html')
    win.loadURL('https://translate.google.cn/')

}

app.whenReady().then(createWindow)
