StringExtensions = function(){
    this.endsWith = function (str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
};

module.exports = new StringExtensions();