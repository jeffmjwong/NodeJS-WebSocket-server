const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 4321 });

wss.on('connection', ws => {
  ws.send('Welcome to the server!');
});
