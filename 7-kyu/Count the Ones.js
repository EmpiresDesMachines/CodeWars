/*
The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used. There are several algorithms for efficient computing of the Hamming weight for numbers. In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number. Thus,

hammingWeight(10) // 1010  => 2
hammingWeight(21) // 10101 => 3
The interesting part of this task is that you have to do it without string operation (hey, it's not really interesting otherwise)

;)
*/

function hammingWeight(x) {
  let toString = '';

  while (x > 1) {
    toString += x % 2;
    x = Math.floor(x / 2);
  }

  return (toString + x).replace(/0/g, '').length;
}
