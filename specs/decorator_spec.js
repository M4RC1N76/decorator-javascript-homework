const assert = require('assert');
const Room = require('../room.js');
const Paint = require('../paint.js');
const Decorator = require('../decorator.js')

describe('Decorator', function(){
    let decorator;
    let paint;
    let room;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(20);
        paint2 = new Paint(20);
        room = new Room(30);
    });

        it('should start with an empty stock', function(){
            const actual = decorator.paintStock;
            assert.deepStrictEqual(actual, []);
        });
        it('should be able to add paint ', function(){
            decorator.addPaint(paint);
            decorator.addPaint(paint2);
            const actual = decorator.paintStock.length;
            assert.deepStrictEqual(actual, 2)
        });
        it('should be able to calculate total paint', function(){
            decorator.addPaint(paint);
            decorator.addPaint(paint2);
            const actual = decorator.totalPaintInStock();
            assert.deepStrictEqual(actual, 40);
        });
        it('Decorator should be able to check if has enough paint to paint room', function(){
            decorator.addPaint(paint);
            decorator.addPaint(paint2);
            const actual = decorator.checkIfEnoughPaint(room);
            assert.deepStrictEqual(actual, true);
        });
        it('be able to paint room if has enough paint', function(){
            decorator.addPaint(paint);
            decorator.addPaint(paint2);
            decorator.paintRoom(room);
            assert.strictEqual(room.painted, true);
            const actual = decorator.totalPaintInStock();
            assert.strictEqual(actual, 10);
        });
});