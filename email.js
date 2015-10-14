var email   = require("emailjs");
var config = require("./config");

var server  = email.server.connect({
    user:    config.EmailUser,
    password:config.EmailPassword,
    host:    config.EmailHost,
    ssl:     config.EmailSSL
});

module.exports = server;