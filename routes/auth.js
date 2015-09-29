var connectRoute = require('connect-route');
var passport = require('../passport');

var webRoute = connectRoute(function (router) {
    router.get('/vkontakte',
        passport.authenticate('vkontakte'),
        function(req, res){
            // The request will be redirected to vk.com for authentication, so
            // this function will not be called.
        });
    router.get('/vkontakte/callback',
        passport.authenticate('vkontakte', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
        });
});

module.exports = webRoute;