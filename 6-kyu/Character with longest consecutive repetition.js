/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)
*/

function longestRepetition(s) {
  const arr = ['', 0];

  const sequence = (s.match(/(.)(\1)*/g) || []);

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i].length > arr[1]) {
      arr[0] = sequence[i].slice(0, 1);
      arr[1] = sequence[i].length;
    }
  }

  return arr;
}