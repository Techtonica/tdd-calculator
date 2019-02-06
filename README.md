# tdd-calculator

Starter repo for http://osherove.com/tdd-kata-1/

Created with help from the jasmine examples generated from https://github.com/jasmine/jasmine-npm 

# Instructions 

Clone this repo! Don't forget to `cd` into it =) then open it up in VS Code with `code .` (or your favorite editor). We only care about two files in this repo right now. Open up `app/Calculator.js` in one pane, and `spec/CalculatorSpec.js` in another pane. It really helps to see your code side-by-side with your tests. 

First make sure jasmine is installed. Let's install it globally. 

`npm install -g jasmine`

You'll see in `spec/CalculatorSpec.js` that I've set up some starter tests for you. You can run them all now, even before doing anything! All you have to do is run this test:

`jasmine`

You should see this output: 

```
judytuna@ikran tdd-calculator (master) $ jasmine
Started
.FF.FF

Failures:
1) Calculator when given two arguments and one operator should add
  Message:
    Expected 3 to equal 8.
  Stack:
    Error: Expected 3 to equal 8.
        at <Jasmine>
        at UserContext.<anonymous> (/Users/judytuna/techtonica/tdd-calculator/spec/CalculatorSpec.js:15:45)
        at <Jasmine>

2) Calculator when given two arguments and one operator should subtract
  Message:
    Expected 9 to equal 7.
  Stack:
    Error: Expected 9 to equal 7.
        at <Jasmine>
        at UserContext.<anonymous> (/Users/judytuna/techtonica/tdd-calculator/spec/CalculatorSpec.js:19:45)
        at <Jasmine>

3) Calculator when given multiple-digit numbers should add
  Message:
    Expected 12 to equal 17.
  Stack:
    Error: Expected 12 to equal 17.
        at <Jasmine>
        at UserContext.<anonymous> (/Users/judytuna/techtonica/tdd-calculator/spec/CalculatorSpec.js:29:46)
        at <Jasmine>

4) Calculator when given multiple-digit numbers should subtract
  Message:
    Expected 88 to equal 56.
  Stack:
    Error: Expected 88 to equal 56.
        at <Jasmine>
        at UserContext.<anonymous> (/Users/judytuna/techtonica/tdd-calculator/spec/CalculatorSpec.js:33:47)
        at <Jasmine>

6 specs, 4 failures
Finished in 0.028 seconds
```

As you can see, I've written six tests to get you started, plus enough code in Calculator that two tests pass, but the rest of the functionality is up to you to implement!

In `spec/CalculatorSpec.js`, you can see that I've done the following things for you that you don't need to change: 

* tell the spec file where to find the calculator code
* before every test, I create a new instance of my Calculator and set it to my `calculator` variable

This is one of the passing tests: 

```javascript
it("should be able to return a single-digit integer", function() {
  expect(calculator.calculate("2")).toEqual(2);
 });
 ```
  
How did I get this test to pass? In `app/Calculator.js`, you can see that I set up a Calculator. It has just one function on its prototype called `calculate` that takes a single string, and returns an integer. I used the `parseInt` method to get you started. 

Then in the test in `spec/CalculatorSpec.js`, I passed the string `"2"` into `calculator.calculate`, and expected it to equal the integer `2`. And it does!
 
But that's not enough! `parseInt` doesn't know what to do when it encounters a space. Can you figure out why the rest of the tests are failing? 
