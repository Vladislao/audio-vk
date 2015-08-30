"use strict";

var connect = require('connect');
var http = require('http');
// gzip/deflate outgoing responses
//var compression = require('compression');
// store session state in browser cookie
//var cookieSession = require('cookie-session');
// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
var connectRoute = require('connect-route');

var app = connect();
//app.use(compression());
//app.use(cookieSession({
//    keys: ['secret1', 'secret2']
//}));
app.use(bodyParser.json());

app.use(connectRoute(function (router) {
    router.get('/', function (req, res, next) {
        res.end('Hello from /!\n');
    });

    router.get('/home', function (req, res, next) {
        res.end('Hello from home');
    });
}));

//create node.js http server and listen on port
http.createServer(app).listen(3000);