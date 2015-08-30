var connectRoute = require('connect-route');

var apiRoute = connectRoute(function (router) {
    router.get('/', function index(req, res, next) {
        res.end('Hello from /!\n');
    });

    router.get('/home', function home_index(req, res, next) {
        res.end('Hello from home');
    });
});

module.exports = apiRoute;