/*
Task
You are given a string s. Your task is to count the number of each letter (A-Z), and make a vertical histogram as result. Look at the following examples to understand the rules.

Example
For s = "XXY YY ZZZ123ZZZ AAA BB C", the output should be:

          *
          *
          *
*       * *
* *   * * *
* * * * * *
A B C X Y Z
Rules
You just need to count the uppercase letters. Any other character will be ignored.
Using * to represent the number of characters.
The order of output is form A to Z. Characters that do not appear in the string are ignored.
To beautify the histogram, there is a space between every pair of columns.
There are no extra spaces at the end of each row. Also, use "\n" to separate rows.
Happy Coding ^_^
*/

function verticalHistogramOf(s) {
  const arr = s
    .replace(/[^A-Z]/g, '')
    .split('')
    .sort();

  let data = {};
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    data[arr[i]] = data[arr[i]] + 1 || 1;
  }

  const max = Math.max(...Object.values(data));

  data = Object.entries(data).map((v) => ' '.repeat(max - v[1]) + '*'.repeat(v[1]) + v[0]);

  for (let i = 0; i <= max; i++) {
    res.push(
      data
        .map((v) => v[i])
        .join(' ')
        .trimEnd(),
    );
  }

  return res.join('\n');
}
