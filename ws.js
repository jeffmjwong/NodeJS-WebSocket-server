const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ port: 4321 });

wss.on('connection', ws => {

  ws.on('message', message => {
    if (message === 'exit') {
      ws.close();
    } else {
      wss.clients.forEach(client => {
        client.send(message);
      });
    }
  });

  ws.send('Welcome to the server!');

});

console.log('WebSocket server is running on port 4321...');
