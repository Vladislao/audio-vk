"use strict";
var connectRoute = require('connect-route');
var needle = require('needle');

var apiRoute = connectRoute(function (router) {
    router.get('/', function index(req, res, next) {
        res.end('Hello from api!\n');
    });
    router.get('/method/*', function vk(req,res,next){
        // client controlled logic
        var method = req.url;
        // token saved on server
        var token = req.session.passport.user.accessToken;

        // create and send request to vk.com
        var url = 'https://api.vk.com' + method + '&access_token=' + token;
        console.log(url);
        needle.get(url,function(error, response) {
            if (!error)
                res.end(JSON.stringify(response.body));
        });
        // todo pipe not working
        //.pipe(res);
    });
});

module.exports = apiRoute;