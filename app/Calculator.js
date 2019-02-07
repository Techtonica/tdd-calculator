function Calculator() {
}
Calculator.prototype.add = function(numbers) {
  this.answer = 0;

  let numbersAsArray = numbers.split(",");

  if(numbersAsArray[0]) {
    this.answer += parseInt(numbersAsArray[0]);
  }

  if(numbers[2]) {
    this.answer += parseInt(numbers[2]);
  }

  return this.answer;
}

module.exports = Calculator;