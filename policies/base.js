function BasePolicy(){
    this.messages = {
        VALID: '',
        METHOD_NOT_SUPPORTED: 'METHOD_NOT_SUPPORTED',
        URL_NOT_CORRECT: 'URL_NOT_CORRECT',
        NAME_NOT_CORRECT: 'NAME_NOT_CORRECT',
        FIELDS_REQUIRED: 'FIELDS_REQUIRED'
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