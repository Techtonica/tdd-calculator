function Calculator() {
}
Calculator.prototype.add = function(numbers) {
  this.answer = 0;

  if(numbers[0]) {
    this.answer = parseInt(numbers[0]);
  }

  return this.answer;
}

module.exports = Calculator;