/*
Here's something near-useless to fill your time! ;P

Your job is to write a function that will take any value, and multiply it the specified number of times. If the times value is not valid, an error should be thrown.

Assuming the times value is valid, the value should be "multiplied" accoridng to the following criteria:

Number: multiply value by times.
String: create a string containing value multiple times. (eg. "blah" * 3 == "blahblahblah".) Where times is 0, an empty string should be returned.
Function: create a function that will run the value function multiple times. Where times is 0, the new function should call the value function 0 times. Each time the original function is called, the context and arguments should be preserved.
Object (non-null-like value): create an array containing value multiple times. (This is a shallow copy, using the original object, not cloning or anything.) Where times is 0, an empty array should be returned.
Anything else: should be returned as-is.
Here's a quick example of how things should work:

multiply(9, 3) == 9 * 3 == 27;
multiply("[string]", 2) == "[string]" + "[string]" == "[string][string]";

var i = 0;
var fn = multiply(function(a, b) {
  if (this.is_context && (a === 1) && (b === "2")) {
    console.log(i);
    i++;
  }
}, 3);
fn.call({ is_context: true }, 1, "2");
// LOGS:
//   0
//   1
//   2

var ref = {};
multiply(ref, 5) == [ref, ref, ref, ref, ref];

multiply(null, 10) == null;
NOTE: If value is a number, times can be any non-infinite number. If value is not a number, times can be any integer >= 0. If these conditions are not met, an error should be thrown.
*/

function multiply(value, times) {
  if (typeof value === 'number') {
    return value * times;
  }

  if (typeof times !== 'number' || !Number.isInteger(times)) throw new Error();

  if (typeof value === 'string') {
    return value.repeat(times);
  }

  if (typeof value === 'function') {
    return function (...args) {
      for (let i = 0; i < times; i++) {
        value.apply(this, args);
      }
    };
  }

  if (typeof value === 'object' && value !== null) {
    return new Array(times).fill(value);
  }

  return value;
}
