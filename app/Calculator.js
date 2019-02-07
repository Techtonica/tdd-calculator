function Calculator() {
}
Calculator.prototype.add = function(numbers) {
  this.answer = 0;

  return this.answer; // in the beginning, do the simplest possible thing to make one test pass
}

module.exports = Calculator;