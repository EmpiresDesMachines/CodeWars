/*
Let's implement the zipObject function that enables such results

zipObject(['fred', 'barney'], [30, 40])
=> { 'fred': 30, 'barney': 40 }

zipObject([['fred', 30], ['barney', 40]])
=> { 'fred': 30, 'barney': 40 }

The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

If only keys are given, then set the values to undefined.

zipObject(['fred', 'barney'])
{ fred: undefined, barney: undefined }

If neither keys nor values are specified, then return {}

zipObject()
{}

*/

const flat = (arr) => arr.reduce((res, v) => (typeof v === 'object' ? res.concat(flat(v)) : [...res, v]), []);

function zipObject(keys = [], values = []) {
  const arr = flat([...keys, ...values]);
  const k = arr.filter((v) => typeof v === 'string');
  const v = arr.filter((v) => typeof v === 'number');

  return k.reduce((obj, val, idx) => ((obj[val] = v[idx]), obj), {});
}