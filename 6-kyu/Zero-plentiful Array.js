/*
An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.
*/

function zeroPlentiful(arr) {
  const zeros = arr.join('').match(/0+/g) || ['0'];
  const sequence = zeros.every((n) => n.length >= 4);

  if (sequence) return zeros.length;
  return 0;
}