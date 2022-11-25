/*
Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

Inherited object properties should not be applied

An example says more than a thousand words..

Example using object

var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};

format(s, o); // "Hello Jack - make me a sandwich"
Example using array

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];

format(s, a); // "Hello Jack - make me a sandwich"
See tests for more information.
*/

const format = (str, obj) =>
  str.replace(/\{.+?\}/g, (v) => (obj[v.slice(1, -1)] !== undefined ? obj[v.slice(1, -1)] : v));
