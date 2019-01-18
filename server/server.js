const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('New user connected.');

  //emit event, passing object
  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey, what is going on.',
    createAt: 123
  });

  socket.emit('newMessage', {
    from: 'ryan@wearehone.com',
    text: 'Hey whats up.',
    createdAt: Date.now()
  });

  socket.on('createEmail', (newEmail) =>{
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (newMessage)=>{
    console.log('createMessage', newMessage);
  });

  socket.on('disconnect', ()=>{
    console.log('User was disconnected.');
  });
  
});

server.listen(port, ()=>{
  console.log(`Server is up on ${port}`);
});