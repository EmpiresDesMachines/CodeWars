/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

Note: Use "" instead of '' in C++.

*/

function updateLight(current) {
  const lights = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  };

  return lights[current];
}