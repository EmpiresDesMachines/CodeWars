/*
We know the formula to find the solutions of an equation of second degree with only one variable:

source: imgur.com

We need the function sec_deg_solver()/secDegSolver(), that accepts three arguments, a, b and c, the coefficients of the above equation.

The outputs of the function may vary depending on the values of coefficients a, b and c, according to the following situations. (used values as examples only):


- If a is equal 0:
                  - If b and c are not 0. It will return: "It is a
                    first degree equation. Solution: 0.5512345"

                  - If a, b and c are 0. It will return:
                     "The equation is indeterminate"

                  - If a and b are 0, and c is not 0. It will
                     return: "Impossible situation. Wrong entries"

                  - If a and c are 0 and b is not 0: It will return: "It is a first
                    degree equation. Solution: 0.0"

- If a is not 0:
                  - If Δ < 0 (see image above). It will return: "There are no real
                    solutions"

                  - If Δ = 0. It will return: "It has one double solution:
                    1.4142135624"

                  - If Δ > 0. It will return: "Two solutions: 1,7320508076, 2.0"
                    (solutions should be sorted)
The results should be expressed up to 10 decimals rounded result Let's see some cases:


a = 0
b = 2
c = -4
secDegSolver(a, b, c) == It is a first degree equation. Solution: 2

a = 10
b = 2
c = -4
secDegSolver(a, b, c) == Two solutions: -0.7403124237, 0.5403124237

a = 1.5
b = 2
c = 4
secDegSolver(a, b, c) == There are no real solutions

a = 1
b = -2
c = 1
secDegSolver(a, b, c) == It has one double solution: 1

a = 0
b = 0
c = 0
secDegSolver(a, b, c) == The equation is indeterminate

a = 0
b = 0
c = 4
secDegSolver(a, b, c) == "Impossible situation. Wrong entries"
(Be aware that the result has a string format and -0.0 is not 0.0)

Note on having two solutions: input them sorted numerically; in the JavaScript version, not to put any extra difficulty on this one, sort them with a simple .sort() (which will sort them lexicographically).

Happy coding!!
*/

function secDegSolver(a, b, c) {
  if (a === 0 && b !== a && c !== a)
    return `It is a first degree equation. Solution: ${-(c / b).toFixed(10)}`;
  if (a === 0 && b === a && c === a) return "The equation is indeterminate";
  if (a === 0 && b === a && c !== a)
    return "Impossible situation. Wrong entries";
  if (a === 0 && c === a && b !== a)
    return "It is a first degree equation. Solution: 0.0";

  const Δ = b ** 2 - 4 * a * c;

  if (Δ < 0) return "There are no real solutions";
  if (!Δ) return `It has one double solution: ${-b / (2 * a)}`;

  const two = [(-b - Math.sqrt(Δ)) / (2 * a), (-b + Math.sqrt(Δ)) / (2 * a)]
    .map((v) => parseFloat(v.toFixed(10)))
    .sort()
    .join(", ");

  return `Two solutions: ${two}`;
}
