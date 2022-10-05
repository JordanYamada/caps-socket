'use strict';

const io = require('socket.io-client');
const handleVendor = require('./handleVendor.js');

const URL = process.env.CAPS_URL || 'http://localhost:3002/caps';
const socket = io.connect(URL);

socket.on('delivered', handleVendor(socket));
