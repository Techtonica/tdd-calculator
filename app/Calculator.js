function Calculator() {
}
Calculator.prototype.calculate = function(inputString) {
    this.inputString = inputString;
    this.answer = 0;

    this.answer = parseInt(inputString);

    return this.answer;
}

module.exports = Calculator;