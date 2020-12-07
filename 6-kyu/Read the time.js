/*
Given time in 24-hour format, convert it to words.

For example:
13:00 = one o'clock
13:09 = nine minutes past one
13:15 = quarter past one
13:29 = twenty nine minutes past one
13:30 = half past one
13:31 = twenty nine minutes to two
13:45 = quarter to two
00:48 = twelve minutes to one
00:08 = eight minutes past midnight
12:00 = twelve o'clock
00:00 = midnight

Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'.

More examples in test cases. Good luck!
*/
function solve(time) {
  const hours = +time.split(':')[0];
  const minutes = +time.split(':')[1];

  const say = sayTheTime(minutes);
  const m = convertMinutes(minutes);
  const h = (minutes >= 31 && hours !== 23) ? convertHours(hours + 1) : (minutes >= 31 && hours === 23) ? convertHours(0) : convertHours(hours);
  if (time === '00:00') return 'midnight';
  if (minutes === 0) return `${h} ${say}`;
  return `${m} ${say} ${h}`;
}

const dig = [
  'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two',
  'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven',
  'twenty eight', 'twenty nine',
];

// Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'.
function sayTheTime(m) {
  if (m === 0) return 'o\'clock';
  if (m <= 30) return 'past';
  if (m > 30) return 'to';
}

function convertMinutes(m) {
  if (m === 0) return '';
  if (m === 15 || m === 45) return 'quarter';
  if (m === 1) return `${dig[m]} minute`;
  if (m <= 29) return `${dig[m]} minutes`;
  if (m === 30) return 'half';
  if (m === 59) return `${dig[60 - m]} minute`;
  if (m > 30) return `${dig[60 - m]} minutes`;
}

function convertHours(h) {
  if (h === 0) return 'midnight';
  if (h <= 12) return dig[h];
  if (h > 12) return dig[h - 12];
}