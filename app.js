const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const publicPath = path.resolve( __dirname, 'public');

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

module.exports = {app, io, server}