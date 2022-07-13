/*
Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:

range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14
*/

let range = (...args) => {
  if (args.length === 1) return Array.from({ length: args[0] }, (_, i) => ++i);
  if (args.length === 2)
    return Array.from({ length: args[1] - args[0] + 1 }, (_, i) => args[0] + i);
  if (args.length === 3)
    return Array.from(
      { length: Math.ceil((args[2] - args[0]) / args[1]) || 1 },
      (_, i) => i * args[1] + args[0],
    );
};
