/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Example:

longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
Note

consecutive strings : follow one after another without an interruption
*/

function longestConsec(strarr, k) {
  if (k > strarr.length || k < 1) return '';

  let result = '';

  for (let start = 0, end = k; start <= strarr.length - k; start++, end++) {
    const current = strarr.slice(start, end).join('');
    if (current.length > result.length) result = current;
  }

  return result;
}