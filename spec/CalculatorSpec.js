describe("Calculator", function() {
  var Calculator = require('../app/Calculator');
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("Create a simple String calculator with a method add(numbers)", function() {
    it("returns 0 if given an empty string", function() {
      expect(calculator.add("")).toEqual(0);
    });
    it("should be able to return one single-digit integer", function() {
      expect(calculator.add("2")).toEqual(2);
    });
    xit("should add two single-digit numbers", function() {
      expect(calculator.add("4,5")).toEqual(9);
    });
  });
});
