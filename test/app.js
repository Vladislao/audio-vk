"use strict";
var request = require('supertest');
var app = require('../app');

//describe('base-policy', function(){
//    it('should have messages', function(){
//        policy.should.be.have.property('messages');
//        policy.messages.should.be.a.object;
//    });
//    describe('#validate()', function(){
//        it('should ')
//    });
//});

describe('/', function(){
    describe('/download', function(){
        it('should require vk url', function(done){
            request(app)
                .get('/download?name=test.mp3')
                .expect(418, done);
        });
        it('should accept only valid vk url', function(done){
            request(app)
                .get('/download?name=test.mp3&url=https://google.com/')
                .expect(418, done);
        });
        it('should require file name', function(done){
            request(app)
                .get('/download?url=https://cs9-1v4.vk.me/p9/ce1fdfcff72903.mp3')
                .expect(418, done);
        });
        it('should accept only valid file extension', function(done){
            request(app)
                .get('/download?url=https://cs9-1v4.vk.me/p9/ce1fdfcff72903.mp3&name=somename.txt')
                .expect(418, done);
        });
        //it('should return audio stream', function(done){
        //    request(app)
        //        .get('/download?url=https://cs9-1v4.vk.me/p9/ce1fdfcff72903.mp3&name=test.mp3')
        //        .expect('Content-type', 'audio/mpeg')
        //        .expect(200, done);
        //});
    });
});