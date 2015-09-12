StringExtensions = function(){
    this.endsWith = function (str, suffix) {
        if(str == null)
            return false;
        if(suffix == null)
            return false;
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    this.startsWith = function (str, suffix) {
        if(str == null)
            return false;
        if(suffix == null)
            return false;
        return str.indexOf(suffix) === 0;
    }
};

module.exports = new StringExtensions();