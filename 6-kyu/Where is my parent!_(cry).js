/*
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/

function findChildren(dancingBrigade) {
  let res = '';
  const children = dancingBrigade.replace(/[A-Z]/g, '').split('').sort().join('')
    .match(/(.)(\1)*/g);

  for (let i = 0; i < children.length; i++) {
    res += children[i][0].toUpperCase() + children[i];
  }

  return res;
}