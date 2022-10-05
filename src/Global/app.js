'use strict';

const global = require('./handleGlobal.js');
const { datetime1, datetime2, datetime3 } = require('../Date/handleDate.js');


setInterval(() => {
  global.emit('pick-up', {
    event: 'pick-up',
    time: datetime1,
    payload:
    {
      store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    },
  });
  global.emit('in-transit', {
    event: 'in-transit',
    time: datetime2,
    payload:
    {
      store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    },
  });
  global.emit('delivered', {
    event: 'delivered',
    time: datetime3,
    payload:
    {
      store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    },
  });
}, 3000);
