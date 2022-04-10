function sepStr(str) {
  const wordsArr = str.split` `;
  const max = Math.max.apply(
    null,
    wordsArr.map((v) => v.length),
  );
  const res = [];

  for (let i = 0; i < max; i++) {
    res.push(wordsArr.map((v) => v[i] || ''));
  }

  return res;
}
