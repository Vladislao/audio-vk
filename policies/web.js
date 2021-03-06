"use strict";
var connectRoute = require('connect-route');
var url = require('url');

var base = require('./base');
var string = require('../extensions/string');

function validateLink(req) {
    var link = req.query.url;

    // should exist
    if (link == null)
        return base.messages.URL_NOT_CORRECT;

    // url must be valid
    var parsedLink = url.parse(link);
    if (parsedLink.hostname == null)
        return base.messages.URL_NOT_CORRECT;

    // url must be on vk domain
    var hostnameSplit = parsedLink.hostname.split('.').reverse();
    if (hostnameSplit[0] !== 'me' || hostnameSplit[1] !== 'vk')
        return base.messages.URL_NOT_CORRECT;

    return base.messages.VALID
}

function validateName(req) {
    var name = req.query.name;

    // should exist
    if (name == null)
        return base.messages.NAME_NOT_CORRECT;

    // name must end with .mp3
    if (string.endsWith(name, '.mp3') === false)
        return base.messages.NAME_NOT_CORRECT;

    return base.messages.VALID
}

var webPolicies = connectRoute(function (router) {

    router.get('/download', function download(req, res, next) {
        base.validate(function(req){
            return validateName(req) || validateLink(req)
        }, req, res, next);
    });

    router.get('/listen', function listen(req, res, next) {
        base.validate(validateLink, req, res, next);
    });
});

module.exports = webPolicies;