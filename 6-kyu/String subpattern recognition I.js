/*
In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).

If you liked it, go for the next kata of the series!
*/

// var # 1
function hasSubpattern(string) {
  for (let i = 1; i < string.length / 2; i++) {
    if (string.slice(0, i + 1).repeat(string.length / (i + 1)) === string) return true;
  }

  return false;
}

// var # 2
const hasSubpattern = (string) => /^(\w+)\1+$/.test(string);
