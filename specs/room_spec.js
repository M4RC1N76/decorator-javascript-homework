const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js')

describe('Room', function(){
    let room;

    beforeEach(function(){
        room = new Room(30); //Arrange
    });
    it('room has area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 30);
    });
    it('room starts not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });
    it('should be able to be painted', function(){
        room.paint();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    });
});