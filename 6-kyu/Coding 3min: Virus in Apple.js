/*
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task
Your apple has a virus, and the infection is spreading.

The apple is a two-dimensional array, containing strings "V" (virus) and "A" (uninfected parts). For each hour, the infection spreads one space up, down, left and right.

Input: 2D array apple and number n (n >= 0).

Output: 2D array showing the apple after n hours.
*/

function sc(apple, n) {
  const virus = [];

  while (n) {
    for (let i = 0; i < apple.length; i++) {
      for (let j = 0; j < apple[i].length; j++) {
        if (apple[i][j] === 'V') virus.push([i, j]);
      }
    }

    virus.forEach(([i, j]) => {
      if (i - 1 > -1) apple[i - 1][j] = 'V';
      if (i + 1 < apple.length) apple[i + 1][j] = 'V';
      if (j - 1 > -1) apple[i][j - 1] = 'V';
      if (j + 1 < apple[i].length) apple[i][j + 1] = 'V';
    });

    n--;
  }

  return apple;
}
