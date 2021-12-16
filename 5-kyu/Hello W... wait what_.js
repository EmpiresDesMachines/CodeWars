/*
In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

Disallowed functionality:

    Strings
    Numbers
    Regular Expressions
    Functions named "Hello", "World", "HelloWorld" or anything similar.
    Object keys named "Hello", "World", "HelloWorld" or anything similar.

Without using the above, output the string "Hello World!" to prove that there is always a way.

*/

var helloWorld = function () {
  const self = helloWorld.name;

  return self.slice(false, true).toUpperCase()
    + self.slice(true, true + true + true + true + true)
    + String.fromCharCode(self.length + self.length + self.length + true + true)
    + self.slice(true + true + true + true + true)
    + String.fromCharCode(self.length + self.length + self.length + true + true + true);
};