/*
This kata is about static method that should return different values.

On the first call it must be 1, on the second and others - it must be a double from previous value.

Look tests for more examples, good luck :)
*/

class Class {
  static v = 1;
  static getNumber() {
    const r = this.v;
    this.v *= 2;
    return r;
  }
}
