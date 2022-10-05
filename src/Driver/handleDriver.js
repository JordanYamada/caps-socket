'use strict';

const handleDriver = (socket) => (payload) => {
  socket.emit('global', payload);
  if (payload.event === 'pick-up') {
    console.log('DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0');
  } else {
    console.log('DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0');
  }
};

module.exports = handleDriver;
