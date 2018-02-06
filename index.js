// It uses common js syntax.
// nodejs does not support ES6 module yet.
// import barely is utlized.
// import electron from 'electron';

const electron = require('electron');

// There are two main mouduel in electron
// 1. electron app and 2. main window
// It is about electron app by creating app "property".
// app object : gives us a view of running electron app life cycle.

/**
 * [electron life cycle]
 * 
 * 1. Electron starts
 * 2. app process is created
 * 3. wait for the new function and start to do something (app ready to start doing things)
 * 4. app close down
 * 
 * app.on('ready', () => {});
 * 
 */
// const { app } = electron;

// in order to use HTML doc, we need to import BrowserWindow
const { app, BrowserWindow } = electron;


// it is #3 above.
// go do something if it is ready.
// It is called "event based programming"
app.on('ready', () => {

    // console.log('App is now ready');
    
    // ({}) : configuration option.
    // new window will pop up when npm run electron. It is a module of 2. mainWindow.
    // It is a part of HTML poart.
    const mainWindow = new BrowserWindow ({});
    
    // At mainWindow or broswer, load some contents by using URL. 
    // mainWindow.loadURL('http://www.google.ca');
    
    //${__dirname} is from nodejs, a command that locate the current directory and "index.html" in it.
    mainWindow.loadURL(`file://${__dirname}/index.html`);

});