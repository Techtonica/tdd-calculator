describe("Calculator", function() {
  var Calculator = require('../app/Calculator');
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should be able to return a single-digit integer", function() {
    expect(calculator.calculate("2")).toEqual(2);
  });

  describe("when given two arguments and one operator", function() {

    it("should add", function() {
      expect(calculator.calculate("3 + 5")).toEqual(8);
    });

    xit("should subtract", function() {
      expect(calculator.calculate("9 - 2")).toEqual(7);
    });
  });

  xdescribe("when given multiple-digit numbers", function() {
    it("should print out a single positive integer", function() {
      expect(calculator.calculate("123")).toEqual(123);
    });

    it("should add", function() {
      expect(calculator.calculate("12 + 5")).toEqual(17);
    });

    it("should subtract", function() {
      expect(calculator.calculate("88 - 32")).toEqual(56);
    });
  });
});
