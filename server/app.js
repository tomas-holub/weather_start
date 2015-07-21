var express    = require('express');
var app        = express();

var env    = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

// serves client
app.use('/', express.static('./client'));
app.use('/views', express.static('./client/views'));
app.use('/bower_components',  express.static('./bower_components'));

var port = parseInt(config.serverPort) || '3000';
var ip   = config.serverIp || '127.0.0.1';

app.listen(port, ip, function () {
    console.log( "Listening on " + ip + ", server_port " + port )
});

module.exports = app;