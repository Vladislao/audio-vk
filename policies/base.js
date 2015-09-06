function BasePolicy(){
    this.messages = {
        VALID: '',
        URL_NOT_CORRECT: 'Url not in correct format',
        NAME_NOT_CORRECT: 'Name not in correct format'
    };

    this.validate = function(validator, req, res, next) {
        var validation = validator(req);
        switch (validation) {
            case this.messages.VALID:
                next();
                break;
            default:
                res.writeHead(418);
                res.end(validation);
        }
    }
}

module.exports = new BasePolicy();