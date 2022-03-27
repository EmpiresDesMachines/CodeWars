/*
You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
My other katas
If you enjoyed this kata then please try my other katas! :-)

Translations are welcome!
*/

function direction(facing, turn) {
  const dir = [
    ['N', 0],
    ['NE', 45],
    ['E', 90],
    ['SE', 135],
    ['S', 180],
    ['SW', 225],
    ['W', 270],
    ['NW', 315],
  ];

  let cur = (dir.find((v) => v[0] === facing)[1] + turn) % 360;
  if (cur < 0) cur = 360 + cur;

  return dir.find((v) => v[1] === cur)[0];
}
