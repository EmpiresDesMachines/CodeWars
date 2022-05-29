/*
Funny Dots

You will get two integers n (width) and m (height) and your task is to draw the following pattern. Each line is seperated with a newline (\n)

Both integers are equal or greater than 1; no need to check for invalid parameters.
Examples


                                            +---+---+---+
             +---+                          | o | o | o |
dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+
             +---+                          | o | o | o |
                                            +---+---+---+


*/

const dot = (n, m) =>
  Array.from({ length: m * 2 + 1 }, (_, i) =>
    !(i % 2)
      ? Array.from({ length: n }, () => "+---").join("") + "+"
      : Array.from({ length: n }, () => "| o ").join("") + "|"
  ).join("\n");
