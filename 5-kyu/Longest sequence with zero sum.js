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
