/*
	Rzye Tello Scratch Connector
  Created By Oscar Beaumont
*/

// Dependencies
const http = require('http');
const menubar = require('menubar');
const TelloClient = require('tello-api-client').TelloClient;

// Global Varibles
global.drone = new TelloClient("192.168.10.1", 8889);
global.battery = 0; //TODO: Make This Update
var mb = menubar({ index: "file://" + __dirname + "/index.html", icon: __dirname + "/DisconnectedIcon.png", height: 100 }); //Create The Menu Icon And Set It To The Disconnected Icon On Startup

// When The Menubar Is Show
mb.on('ready', () => {
  console.log("Started The Tello Scratch Connector!");
  
  //TODO: Update The Icon In The Menubar For The Connection Status
});

// Enable Tello Commandment Mode
global.drone.command();

// Startup The Webserver -> Scratch Sends Its Command To This
http.createServer(require('./handler')(drone)).listen(8001);
