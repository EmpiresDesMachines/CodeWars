/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    (s[i] !== '#') ? arr.push(s[i]) : arr.pop();
  }
  return arr.join('');
}