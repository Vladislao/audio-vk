"use strict";

//<editor-fold desc="EXTERNAL LIBS">
var connect = require('connect');
// gzip/deflate outgoing responses
var compression = require('compression');
// parse cookies
//var cookieParser = require('cookie-parser');
// store session state in browser cookie
var expressSession = require('express-session');
// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
// query parsing
var query = require('connect-query');
// static files handling
var serveStatic = require('serve-static');
//</editor-fold>


//<editor-fold desc="INTERNAL LIBS">
// extensions
var response = require('./extensions/response');
// policies
var webPolicy = require('./policies/web');
var authPolicy = require('./policies/auth');
// routes
var webRoute = require('./routes/web');
//var apiRoute = require('./routes/api');
var authRoute = require('./routes/auth');
// passport
var passport = require('./passport');
// config
var config = require('./config');
//</editor-fold>


var app = connect();
app.use(response());
app.use(compression());

app.use(query());
app.use(bodyParser.json());

// session
//app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: config.CookieSecrets,
    cookie: {maxAge: 24 * 60 * 60 * 1000}
}));
// passport
app.use(passport.initialize());
app.use(passport.session());

// user must be logged in
app.use('/', authPolicy);

// static files
app.use('/', serveStatic(__dirname + '/public'));

// policies
app.use('/', webPolicy);

// controllers
app.use('/', webRoute);
//app.use('/api/', apiRoute);
app.use('/auth', authRoute);

//app.use(function onerror(err, req, res, next) {
//    res.end(err.message);
//});

//create node.js http server and listen on port
module.exports = app;