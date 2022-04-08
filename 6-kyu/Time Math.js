/*
Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

timeMath('01:24:31', '-', '02:31:41') === '22:52:50'
*/

function timeMath(time1, op, time2) {
  const t1 = time1.split(':');
  const t2 = time2.split(':');
  const t1ms = t1[0] * 3600 + t1[1] * 60 + t1[2] * 1;
  const t2ms = t2[0] * 3600 + t2[1] * 60 + t2[2] * 1;
  let t = (op == '+' ? t1ms + t2ms : t1ms - t2ms) % 86400;

  if (t < 0) t = 86400 + t;

  return `${('00' + Math.floor(t / 3600)).slice(-2)}:${(
    '00' + Math.floor((t % 3600) / 60)
  ).slice(-2)}:${('00' + Math.floor(t % 60)).slice(-2)}`;
}
