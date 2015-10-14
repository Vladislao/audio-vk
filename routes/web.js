"use strict";

var connectRoute = require('connect-route');
var fileService = require('../bll/file-service');
var emailServer = require('../email');
var config = require('../config');

var apiRoute = connectRoute(function (router) {

    router.get('/download', function download(req, res, next) {
        res.setHeader('Content-disposition', 'attachment; filename=' + req.query.name);
        res.setHeader('Content-type', 'audio/mpeg');
        fileService.download(req.query.url).pipe(res);
    });

    router.get('/listen', function listen(req, res, next) {
        res.setHeader('Content-type', 'audio/mpeg');
        fileService.download(req.query.url).pipe(res);
    });

    router.post('/review', function review(req, res, next){

        var text = req.body.text;

        emailServer.send({
            text:    text,
            from:    'inbox <' + config.EmailUser + '>',
            to:      'inbox <' + config.EmailUser + '>',
            subject: 'AudioVK feedback'
        }, function(err, message) {
            console.log(err || message);
        });

        res.end();
    });

});

module.exports = apiRoute;