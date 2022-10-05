'use strict';

function handleGlobal(payload) {
  console.log('EVENT', payload);
}

module.exports= handleGlobal;

'use strict';

require('dotenv').config();
const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const eventPool = require('../eventPool.js');

const server = io(PORT);
const global = server.of('/caps'); // clients connect at http://localhost:3002/caps

global.on('connection', (socket) => {
  // console.log('User connected!');
  // socket.join('delivery');
  // io.in('delivery').emit(console.log('Welcome'));

  // socket.on('disconnecting', () => {
  //   console.log(socket.rooms); // the Set contains at least the socket ID
  // });

  // socket.on('disconnect', () => {
  //   // socket.rooms.size === 0
  // });

  console.log('User connected!');

  // logs every event in the event pool
  eventPool.forEach(event => {
    socket.on(event, (payload) => {
      console.log('EVENT', payload);
    });
  });

  socket.on('pick-up', (payload) => socket.broadcast.emit('pick-up', payload));
  socket.on('in-transit', (payload) => socket.broadcast.emit('in-transit', payload));
  socket.on('delivered', (payload) => socket.broadcast.emit('delivered', payload));
});

module.exports = global;
