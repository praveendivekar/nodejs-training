import express from 'express';
import http from 'http';
import io from 'socket.io';
import path from 'path';

const app = express();
const server = http.Server(app); // instantiate an http instance for server
const socketIo = io(server);
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/index.html'));
});

socketIo.on('connection', (socket) => {
  console.log('User is connected');
  socket.on('message', (message) => {
    socketIo.emit('message', message);
  })
})

server.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
