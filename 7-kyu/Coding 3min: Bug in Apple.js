/*
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.

Task:
Find out "B"(Bug) in a lot of "A"(Apple).

There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

input: string Array apple

output: Location of "B", [x,y]
*/

function sc(apple) {
  for (let i = 0; i < apple.length; i++) {
    const check = apple[i].indexOf('B');
    if (check > -1) return [i, check];
  }
}
