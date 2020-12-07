/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

function parse(data) {
  let value = 0;
  const arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'i') value++;
    if (data[i] === 'd') value--;
    if (data[i] === 's') value *= value;
    if (data[i] === 'o') arr.push(value);
  }
  return arr;
}