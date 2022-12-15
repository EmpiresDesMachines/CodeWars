/*
In some programming languages, strings internally are implemented like an array of chars

This allows things like this:

function isVowel(char) {
  return char.match(/^[aeiouAEIOU]$/) != null;
}

"abcefghijk".map(function(char) {
  if (isVowel(char)) {
    return char.toUpperCase();
  } else {
    return char;
  }
}); //AbcEfghIjk
I mean, we can apply the array methods to strings.

Sadly, in JavaScript, there is no a Char type, and strings do not have most of the methods of arrays.
*/

String.prototype.map = function (fn) {
  return this.split('').map(fn).join('');
};
String.prototype.join = function (j) {
  return this.split('').join(j);
};
String.prototype.filter = function (f) {
  return this.split('').filter(f).join('');
};
String.prototype.forEach = function (f) {
  return this.split('').forEach(f);
};
String.prototype.some = function (f) {
  return this.split('').some(f);
};
String.prototype.every = function (f) {
  return this.split('').every(f);
};
String.prototype.reduce = function (f, init) {
  return this.split('').reduce(f, init);
};
String.prototype.reduceRight = function (f, init) {
  return this.split('').reduceRight(f, init);
};
String.prototype.sort = function (f) {
  return this.split('').sort(f).join('');
};
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};
String.prototype.push = function (v) {
  return this + v;
};
String.prototype.pop = function () {
  return this.slice(0, -1);
};
String.prototype.shift = function () {
  return this.slice(1);
};
String.prototype.unshift = function (v) {
  return v + this;
};
String.prototype.splice = function (s, d, ...i) {
  return this.slice(0, s) + i.join('') + this.slice(s + d);
};
