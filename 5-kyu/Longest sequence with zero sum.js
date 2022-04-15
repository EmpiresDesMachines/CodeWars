/*
Write a method which takes an array of integers (positive and negative) and returns the longest contiguous sequence in this array, which total sum of elements equal 0.

For example:
maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11])

Should return [92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.
*/

const maxZeroSequence = (arr) => {
  let max = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      const seq = arr.slice(j, i + 1);
      const seqSum = seq.reduce((acc, v) => acc + v, 0);
      if (seqSum === 0 && max.length < seq.length) max = seq;
    }
  }

  return max;
};
