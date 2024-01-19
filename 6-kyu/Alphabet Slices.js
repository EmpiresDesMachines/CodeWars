/*
Given a string of lowercase letters, find substrings that consist of consecutive letters of the lowercase English alphabet and return a similar string, but with these substrings in reversed alphabetical order.

examples:

("xabc")=> "xcba"

xa is not found in the alphabet, but abc is found, so it is reversed.

("pqrsxdef")=> "srqpxfed"

("jklxyz")=> "lkjzyx"

("vwxcdefg")=> "xwvgfedc"

("vvmnozzstubb")=> "vvonmzzutsbb"

Note: if there are no alphabet substrings in the input string, return the input string as is.

All inputs will consist of one or more lowercase letters. This kata uses only lowercase strings.
*/

function solution(str) {
  str = str.split("").reduce((acc, v) => (acc.push(v.charCodeAt()), acc), []);

  const arr = [[str[0]]];

  for (let i = 1; i < str.length; i++) {
    const last = arr[arr.length - 1][arr[arr.length - 1].length - 1];
    if (last === str[i] - 1) {
      arr[arr.length - 1].push(str[i]);
    } else {
      arr.push([str[i]]);
    }
  }

  return arr
    .map((v) =>
      (v.length > 1 ? v.reverse() : v)
        .map((s) => String.fromCharCode(s))
        .join(""),
    )
    .join("");
}
