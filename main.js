const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let win;

function createWindow() {
	win = new BrowserWindow({width: 800, height: 600, frame: false});

	win.loadURL(`file://${__dirname}/app/index.html`);

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	app.quit();
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});