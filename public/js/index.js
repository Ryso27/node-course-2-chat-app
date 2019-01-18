var socket = io();

socket.on('connect', function () {
  console.log('Connected to server.');

  socket.emit('createEmail', {
    to: 'jen@email.com',
    text: 'hey, this is jen from email'
  });

  socket.emit('createMessage', {
    to: 'jen@message.com',
    text: 'hey, this is jen from chat'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server.');
});

//listener for newEmail event
socket.on('newEmail', function(email) {
  console.log('New email', email);
});

socket.on('newMessage', function(message) {
  console.log('New message', message);
});