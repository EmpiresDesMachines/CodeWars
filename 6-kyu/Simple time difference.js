/*
In this Kata, you will be given a series of times at which an alarm goes off. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm goes off now, it will not go off for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not go off is 11 hours and 40 minutes.

In the second example, the alarm goes off 4 times in a day.

More examples in test cases. Good luck!
*/

function solve(arr) {
  if (arr.length === 1) return '23:59';
  const conv = convert(arr);
  const sort = sorting(conv);
  const time = calcTimeDifference(sort);
  const difference = getBiggestDiff(time);
  const rezult = convertMinutsToTime(difference);
  return rezult;
}

function convert(arr) {
  return arr.map(el => {
    el = el.split(':');
    el = el[0] * 60 + +el[1];
    return el;
  });
}

sorting = arr => arr.sort((a, b) => a - b);

function calcTimeDifference(arr) {
  const dif = [];
  for (let i = 0; i < arr.length - 1; i++) {
    dif.push(Math.abs(arr[i] - arr[i + 1]));
  }
  const diff = newDif(arr);
  dif.push(diff);
  return sorting(dif);
}

function newDif(arr) {
  const firstEl = arr[0];
  const lastEl = arr[arr.length - 1];
  return 1440 - lastEl + firstEl;
}

const getBiggestDiff = arr => arr[arr.length - 1];

function convertMinutsToTime(minutes) {
  minutes--;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${addZero(hours)}:${addZero(mins)}`;
}

const addZero = dig => ((dig < 10) ? `0${dig}` : dig);