var sut = require('../index.js');
var assert = require('assert');

describe('app', function(){
    it('test',function(done){
        sut.init_db(function (){
            sut.truncate({}, function(res){
                sut.items({}, function(res){
                    assert.deepEqual(res, []);
                    sut.create({body: {x: 1}}, function(res){
                        var item = res[0];
                        assert.notEqual(item.id, null);
                        assert.deepEqual(item.data, {x: 1});
                        sut.items({}, function(res){
                            var item = res[0];
                            assert.notEqual(item.id, null);
                            assert.deepEqual(item.data, {x: 1});
                            done();
                        });
                    });
                });
            });
        });
    });
});

