/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples
"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/

function balance(left, right) {
  left = left.split('').reduce((acc, v) => (v === '!' ? acc + 2 : acc + 3), 0);
  right = right.split('').reduce((acc, v) => (v === '!' ? acc + 2 : acc + 3), 0);
  return left === right ? 'Balance' : left > right ? 'Left' : 'Right';
}
