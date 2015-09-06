var app = require('./app.js');
var http = require('http');

http.createServer(app).listen(3000);