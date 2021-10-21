/*
In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

(nk)=n!k!(n−k)!\lparen {n \atop k} \rparen = \frac {n!} {k!(n-k)!}(
k
n

 )=
k!(n−k)!
n!

where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
Note
Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.
*/

function pascalsTriangle(n) {
  const triangle = Array.from({ length: n });

  for (let i = 0; i < n; i++) {
    const row = Array.from({ length: i + 1 });
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
    }

    triangle[i] = row;
  }

  return [].concat(...triangle);
}