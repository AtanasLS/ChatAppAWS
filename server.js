const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 4200 });

server.on('connection', (socket) => {
  console.log('Client connected');

  // Handle messages from clients
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // You can handle the message here and send a response if needed
  });

  // Handle client disconnection
  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server listening on port 4200');
