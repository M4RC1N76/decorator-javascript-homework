const Paint = function(litresOfPaint){
    this.litresOfPaint = litresOfPaint;

}

Paint.prototype.checkIfEmptyCan = function (){
    return this.litresOfPaint === 0;
}
Paint.prototype.emptyPaint = function(){
    this.litresOfPaint = 0;
}
module.exports = Paint;