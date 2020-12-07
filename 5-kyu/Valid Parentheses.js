/*
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens) {
  if (parens.length % 2 !== 0) return false;
  for (let i = 0; i < parens.length * 3; i++) {
    parens = parens.replace(/\(\)/g, '');
  }
  return !parens;
}