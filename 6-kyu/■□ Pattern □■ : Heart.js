/*
Task:
Complete the pattern using the following set of characters: ■, , ◥, ◤, ◣, ◢
In this kata, we need draw a Heart.
Rules:
parameter n The width of heart, an even number, n>=6, the heart's height increases with n, look at example.
return a string, ■ ◥◤◣◢ represents the heart, and Full width space character pad at heart's left and right side.
Examples:
(Please do not mind the black stripes, this is codewars description display effect, not perfect)

draw(6)
◢■◣◢■◣
■■■■■■
◥■■■■◤
 ◥■■◤
  ◥◤
  */

adaptSize(0.9); // You can adjust the size of the cells, so that your heart is displayed better
// display(heart)  // to debug your code

function draw(n) {
  const heart = [];

  const top = '◢' + '■'.repeat(n / 2 - 2) + '◣';
  heart.push(top.repeat(2));

  const line = '■'.repeat(n);
  const lines = new Array(Math.floor(n / 6)).fill(line);
  heart.push(...lines);

  for (let i = n, j = 0; i > 0; i -= 2, j++) {
    const line = ' '.repeat(j) + '◥' + '■'.repeat((i / 2 - 1) * 2) + '◤' + ' '.repeat(j);
    heart.push(line);
  }

  return heart.join('\n');
}
