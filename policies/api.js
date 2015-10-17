"use strict";
var connectRoute = require('connect-route');
var url = require('url');

var base = require('./base');
var string = require('../extensions/string');

var _availableMethods = {
    '/method/audio.get': null,
    '/method/audio.search': null
};

function _validateMethod(req) {
    // method must be supported
    var parsedLink = url.parse(req.url);
    if (_availableMethods[parsedLink.pathname] === undefined)
        return base.messages.METHOD_NOT_SUPPORTED;

    return base.messages.VALID
}

var apiPolicies = connectRoute(function (router) {

    router.get('/method/*', function method(req, res, next) {
        base.validate(_validateMethod, req, res, next);
    });

});

module.exports = apiPolicies;