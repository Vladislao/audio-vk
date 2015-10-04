var string = require('../extensions/string');

module.exports = function(req,res,next){
    if (string.startsWith(req.url, '/auth/')) return next();

    if (req.session.passport == null)
    {
        res.writeHead(302, {
            'Location': '/auth/vkontakte'
        });
        res.end();
    } else {
        next();
    }
};