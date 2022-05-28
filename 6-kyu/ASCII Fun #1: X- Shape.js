/*
You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o
Examples


                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□             x(5) =>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■


*/

function x(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const line = new Array(n).fill("□");
    line[i] = "■";
    line[n - i - 1] = "■";
    arr.push(line);
  }

  return arr
    .map((v) => v.join(""))
    .join("\n");
}
