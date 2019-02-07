# tdd-calculator

Starter repo for http://osherove.com/tdd-kata-1/

Created with help from the jasmine examples generated from https://github.com/jasmine/jasmine-npm

## Instructions

Clone this repo! Don't forget to `cd` into it =) then open it up in VS Code with `code .` (or your favorite editor). We only care about two files in this repo right now. Open up `app/Calculator.js` in one pane, and `spec/CalculatorSpec.js` in another pane. It really helps to see your code side-by-side with your tests.

First make sure jasmine is installed. Let's install it globally.

`npm install -g jasmine`

You'll see in `spec/CalculatorSpec.js` that I've set up some starter tests for you. You can run them all now, even before doing anything! All you have to do is run this command in your command line:

`jasmine`

Yes! It's that plain. You should see this output:

```bash
judytuna@ikran tdd-calculator (master) $ jasmine
Started
.F*

Failures:
1) Calculator Create a simple String calculator with a method add(numbers) should be able to return one single-digit integer
  Message:
    Expected 0 to equal 2.
  Stack:
    Error: Expected 0 to equal 2.
        at <Jasmine>
        at UserContext.<anonymous> (/Users/judytuna/techtonica/tdd-calculator/spec/CalculatorSpec.js:14:35)
        at <Jasmine>
Pending:

1) Calculator Create a simple String calculator with a method add(numbers) should add two numbers
  Temporarily disabled with xit

3 specs, 1 failure, 1 pending spec
Finished in 0.018 seconds
```

As you can see, I've written three tests to get you started. I wrote a tiny bit of code in Calculator that makes the first test pass. I've left one test failing so that you can see what the failure looks like. I've "x-ed out" the third test so you focus on a single red (failing) test at a time. The rest of the functionality is up to you to implement!

In `spec/CalculatorSpec.js`, you can see that I've done the following things for you that you don't need to change:

* tell the spec file where to find the calculator code
* before every test, I create a new instance of my Calculator and set it to my `calculator` variable

This is the code for the passing test:

```javascript
it("returns 0 if given an empty string", function() {
  expect(calculator.add("")).toEqual(0);
});
```

In this test code, I passed the string `""` into `calculator.add`, and expected it to equal the integer `0`.

How did I get this test to pass? In `app/Calculator.js`, you can see that I set up a Calculator function. It has just one function on its prototype called `add` that takes a single string as its only argument, and returns an integer. I made the "empty string makes a 0" test pass by doing the easiest thing possible: it literally always returns zero! (You'll want to change that line and add functionality there.) It makes the first test pass, but it's not going to work for any other cases =) That's why we need more tests!

Please follow the instructions in the TDD-kata link above and only work on one tiny thing at a time. First get the "should be able to return one single-digit integer" test to pass. Then un-x the `xit`ed test on line 16 of the spec file, so that it starts with `it` instead of `xit`, and work on making that test pass. Then you can move on to what the TDD-kata link says to work on next!