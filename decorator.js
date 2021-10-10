const Room = require('./room.js');
const Paint = require('./paint.js')

const Decorator = function(){
    this.paintStock = []; // empty stock
}
// Add Paint
Decorator.prototype.addPaint = function(paint){
    this.paintStock.push(paint);
}
// Be Able to Calculate total
Decorator.prototype.totalPaintInStock = function(){
    let total = 0;
    for (let paint of this.paintStock) {
        total += paint.litresOfPaint;
    }
    return total;
}
// Calculate if enough paint
Decorator.prototype.checkIfEnoughPaint = function(room){
    const allPaint = this.totalPaintInStock();
    return allPaint >= room.area; 
}
// be able to paint room if enough paint

module.exports = Decorator;