/*
Implement a class/function, which should parse time expressed as HH:MM:SS, or null/nil/None otherwise.

Any extra characters, or minutes/seconds higher than 59 make the input invalid, and so should return null/nil/None.
*/

String.prototype.toSeconds = function () {
  return /^(\d{2}):([0-5][0-9]):([0-5][0-9])$/.test(this)
    ? this.split(":").reduce(
        (acc, v) => [acc[0] + v * acc[1], [acc[1] / 60]],
        [0, 3600],
      )[0]
    : null;
};
