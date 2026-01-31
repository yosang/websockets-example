const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 5000 });

server.on("connection", (socket) => {
  console.log("A new client has connected");

  socket.on("message", (data) => {
    console.log("Message received: ", data.toString());

    // Broadcast the message to all clients on the server
    server.clients.forEach((client) => {
      // console.log(client.readyState);

      client.send(data.toString());
    });
  });
});

console.log("WebSocket server is open");
