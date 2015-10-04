function extension() {
    return function response(req, res, next) {
        res.redirect = function (path) {
            res.writeHead(302, {
                'Location': path
            });
            res.end();
        };
        next();
    }
}

module.exports = extension;