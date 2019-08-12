const { app, BrowserWindow, } = require('electron');
var fs = require('fs');
const fse = require('fs-extra');
// Main Process


function createWindow () {



  // var dir = './teste';

  // if (!fs.existsSync(dir)){
  //     fs.mkdirSync(dir);
  // }

  // fs.appendFile("./teste/mynewfile1.txt", 'Hello content!', function (err) {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });


  // fse.move('./teste', '/teste', err => {
  //   if(err) return console.error(err);
  //   console.log('success!');
  // });

  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // e carregar o index.html do aplicativo.
  win.loadFile('index.html');
  console.log(win.webContents.getURL());

}

app.on('ready', createWindow);