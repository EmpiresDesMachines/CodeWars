/*
Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn.

compose(n, f1, f2, f3..., fn) // === fn(...(f3(f2(f1(n)))))
So:

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

compose(5, doubleTheValue) // should === 10
compose(5, doubleTheValue, addOneToTheValue) // should === 11
If only a single parameter is passed in, return that parameter.

compose(n) = n
*/

const compose = (n, ...fns) => fns.reduce((acc, fn) => fn(acc), n);
