"use strict";
var connectRoute = require('connect-route');
var passport = require('../passport');

var authRoute = connectRoute(function (router) {
    router.get('/vkontakte', passport.authenticate('vkontakte'));
    router.get('/vkontakte/callback', function(req, res, next){
        passport.authenticate('vkontakte', {failureRedirect: '/login'},
            function (err, auth) {
                res.writeHead(302, {
                    'Location': '/'
                });
                res.end();
            })(req,req,next);
    });
});

module.exports = authRoute;