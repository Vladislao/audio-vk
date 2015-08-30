var needle = require('needle');

function FileService(){

    this.download = function(url){
        return needle.get(url);
    };

}

module.exports = new FileService();