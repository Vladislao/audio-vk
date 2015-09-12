"use strict"

var str = require('../../extensions/string');

describe('string', function(){
   describe('#endsWith()', function(){
       it('should return true when really ends with', function(){
           var res = str.endsWith('some test string', 'test string');
           res.should.be.true();
       });
       it('should return false when not ends with', function(){
           var res = str.endsWith('some test string', 'some');
           res.should.be.false();
       });
       it('should not throw when input string is null', function(){
           (function(){str.endsWith(null, 'some');}).should.not.throw();
       });
       it('should not throw when input string is empty', function(){
           (function(){str.endsWith('', 'some');}).should.not.throw();
       });
       it('should not throw when matching string is null', function(){
           (function(){str.endsWith('some test string', null);}).should.not.throw();
       });
       it('should not throw when matching string is empty', function(){
           (function(){str.endsWith('some test strig', '');}).should.not.throw();
       });
   });
    describe('#startsWith()', function(){
        it('should return true when really starts with', function(){
            var res = str.startsWith('some test string', 'some test');
            res.should.be.true();
        });
        it('should return false when not starts with', function(){
            var res = str.startsWith('some test string', 'test string');
            res.should.be.false();
        });
        it('should not throw when input string is null', function(){
            (function(){str.startsWith(null, 'some');}).should.not.throw();
        });
        it('should not throw when input string is empty', function(){
            (function(){str.startsWith('', 'some');}).should.not.throw();
        });
        it('should not throw when matching string is null', function(){
            (function(){str.startsWith('some test string', null);}).should.not.throw();
        });
        it('should not throw when matching string is empty', function(){
            (function(){str.startsWith('some test strig', '');}).should.not.throw();
        });
    });
});