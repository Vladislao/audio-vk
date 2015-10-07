"use strict";
var connectRoute = require('connect-route');
var passport = require('../passport');

var authRoute = connectRoute(function (router) {
    router.get('/vkontakte', passport.authenticate('vkontakte', { scope: ['audio'] }));
    router.get('/vkontakte/callback', passport.authenticate('vkontakte', {
        successRedirect: '/',
        failureRedirect: '/auth/error'
    }));
});

module.exports = authRoute;