/*
The Pell sequence is the sequence of integers defined by the initial values

P(0) = 0, P(1) = 1

and the recurrence relation

P(n) = 2 * P(n-1) + P(n-2)

The first few values of P(n) are

0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ...

Task

Your task is to write a method that returns nth Pell number

*/

function pell(n) {
  const pell = [0n, 1n];

  for (let i = 1; i < n; i++) {
    pell.push(2n * pell[i] + pell[i - 1]);
  }

  return pell[pell.length - 1];
}


// #2
function pell(n) {
  const pell = [BigInt(0), BigInt(1)];
  
  for (let i = 1; i < n; i++) {
    pell.push(BigInt(2) * pell[i] + pell[i - 1]);
  }
  
  return pell[pell.length - 1];
}