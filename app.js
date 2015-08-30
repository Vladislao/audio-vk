"use strict";

// EXTERNAL LIBS
var connect = require('connect');
var http = require('http');
// gzip/deflate outgoing responses
var compression = require('compression');
// store session state in browser cookie
//var cookieSession = require('cookie-session');
// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');

// INTERNAL LIBS
// routes
var webRoute = require('./routes/web');
var apiRoute = require('./routes/api');

var app = connect();
app.use(compression());
//app.use(cookieSession({
//    keys: ['secret1', 'secret2']
//}));
app.use(bodyParser.json());

app.use('/', webRoute);
app.use('/api/', apiRoute);

//create node.js http server and listen on port
http.createServer(app).listen(3000);