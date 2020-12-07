/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html
Examples

zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/

/*
Факториал числа n равен произведению чисел от 1 до n.
Ноль в конце произведения появляется в результате перемножения 2 и 5.
Но поскольку при разложении на простые  множители  числа n! двоек больше чем пятерок,
то  количество  нулей в конце n! равно количеству  пятерок в разложении n! на простые
множители.
Суммирование происходит  до тех  пор, пока очередное слагаемое не станет равным 0.
*/

function zeros(n) {
  let zeros = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    zeros += n;
  }
  return zeros;
}