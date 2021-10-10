const assert = require('assert');
const Paint = require('../paint.js');
const Room = require('../room.js');
const Decorator = require('../decorator.js')

describe('Paint', function(){
    let paint;

    beforeEach(function(){
        paint = new Paint(20); //Arrange

    });
    it('can have litres', function(){
        const actual = paint.litresOfPaint; //Act
        assert.strictEqual(actual, 20);//Assert
    });


    it('check if a can is not empty', function(){
        const actual = paint.checkIfEmptyCan();
        assert.strictEqual(actual, false);
    });

    it('check if can is empty', function(){
        const paint1 = new Paint(0);
        const actual = paint1.checkIfEmptyCan();
        assert.strictEqual(actual, true);
    });

    it('should tell the can is empty', function(){
        const paint2 = new Paint(20);
        paint2.emptyPaint();
        assert.strictEqual(paint2.litresOfPaint, 0);
    });
});