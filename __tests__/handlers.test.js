'use strict';

const io = require('socket.io-client');
const global = require('../src/Global/handleGlobal.js');

const socket = io.connect('http://localhost:3002/caps');
const handleDriver = require('../src/Driver/handleDriver.js');
const handleVendor = require('../src/Vendor/handleVendor.js');

describe('testing event handlers', () => {

  test('Driver should confirm package was picked up', () => {
    jest.spyOn(console, 'log');
    jest.spyOn(socket, 'on');
    jest.spyOn(global, 'emit');
    socket.on('pick-up', handleDriver);
    global.emit('pick-up', { event: 'pick-up' });
    expect(console.log).toHaveBeenCalledWith('DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0');
    expect(global.emit).toHaveBeenCalledWith('pick-up', { event: 'pick-up' });
  });

  test('Driver should confirm package is delivered', () => {
    jest.spyOn(console, 'log');
    jest.spyOn(socket, 'on');
    jest.spyOn(global, 'emit');
    socket.on('in-transit', handleDriver);
    global.emit('in-transit', { event: 'in-transit' });
    expect(console.log).toHaveBeenCalledWith('DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0');
    expect(global.emit).toHaveBeenCalledWith('in-transit', { event: 'in-transit' });
  });
  test('Vendor should confirm package was received', () => {
    jest.spyOn(console, 'log');
    jest.spyOn(socket, 'on');
    jest.spyOn(global, 'emit');
    socket.on('delivered', handleVendor);
    global.emit('delivered', { event: 'delivered' });
    expect(console.log).toHaveBeenCalledWith('VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0');
    expect(global.emit).toHaveBeenCalledWith('delivered', { event: 'delivered' });
  });
});

