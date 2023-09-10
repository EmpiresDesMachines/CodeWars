/*
There are a series of 10 bombs about to go off! Defuse them all! Simple, right?

Note: This is not an ordinary Kata, but more of a series of puzzles. The point is to figure out what you are supposed to do, then how to do it. Instructions are intentionally left vague.
*/

// Defuse all of the Bombs!
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);
Bomb.diffuse(Bomb.key);

Bomb.diffuse(global.BombKey);

global.diffuseTheBomb = () => true;
Bomb.diffuse();

Bomb.diffuse(3.14159);

Bomb.diffuse(new Date().setFullYear(new Date().getFullYear() - 4));

Bomb.diffuse(Object.freeze({ key: 43 }));

Bomb.diffuse({
  v: 0,
  valueOf: function () {
    return this.v++ === 0 ? 1 : 99;
  },
});

let v = 0;
Math.random = () => (v++ === 0 ? 0.5 : 1);
Bomb.diffuse(42);

Array.prototype.valueOf = function () {
  return this.reduce((acc, v) => acc + v, 0);
};
Bomb.diffuse("eWVz");

// console.log(Bomb.diffuse.toString());
// console.log(Bomb);
// console.log(global);
