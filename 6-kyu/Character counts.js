/*
Character counts
The object is to count the number of occurances of a specified character (or set of characters) in a string.

Instructions
Complete the placeholder function characterCount.

it should return the number of times a single character appears in the string, or
if multiple characters are specified (either by providing an array or string of length 2 or more), it should return an array of character counts
see the unit tests provided for a more comprehensive definition
NOTE: The tests assume that if no arguments are provided to the function (i.e. ''.characterCount()), then the result is undefined.
*/

/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) return;
  const res = [];

  for (let i = 0; i < charsToCount.length; i++) {
    res.push(
      (
        this.match(
          new RegExp(
            (/\w/.test(charsToCount[i]) ? "" : "\\") + charsToCount[i],
            "g",
          ),
        ) || []
      ).length,
    );
  }

  return res.length < 2 ? res[0] : res;
};
