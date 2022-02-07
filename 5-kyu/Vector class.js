/* 
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error
If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:

a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
*/

const check = (a, b) => a.length !== b.length;

const Vector = function (components) {
  this.arr = components;
};

Vector.prototype.add = function (b) {
  const a = this.arr;
  b = b.arr;
  if (check(a, b)) throw new Error('length error');
  return new Vector(a.map((v, idx) => v + b[idx]));
};

Vector.prototype.equals = function (b) {
  const a = this.arr;
  b = b.arr;
  if (check(a, b)) return false;
  return !a.filter((v, idx) => v !== b[idx]).length;
};

Vector.prototype.subtract = function (b) {
  const a = this.arr;
  b = b.arr;
  if (check(a, b)) throw new Error('length error');
  return new Vector(a.map((v, idx) => v - b[idx]));
};

Vector.prototype.dot = function (b) {
  const a = this.arr;
  b = b.arr;
  if (check(a, b)) throw new Error('length error');
  return a.reduce((acc, v, idx) => (acc += v * b[idx]), 0);
};

Vector.prototype.norm = function () {
  const a = this.arr;
  return Math.sqrt(a.reduce((acc, v) => (acc += v ** 2), 0));
};

Vector.prototype.toString = function () {
  const a = this.arr;
  return '(' + JSON.stringify(a).slice(1, -1) + ')';
};
