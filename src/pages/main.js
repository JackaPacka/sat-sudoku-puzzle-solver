const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 600,
        height: 700,
        resizable: false,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: './public/logo192.png'
    });
    Menu.setApplicationMenu(null);

    // Load the react app !TEMP!
    mainWindow.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
