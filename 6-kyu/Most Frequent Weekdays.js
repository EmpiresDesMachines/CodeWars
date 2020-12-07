/*
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], ['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

    Week starts on Monday.
    Year is between 1583 and 4000.
    Calendar is Gregorian.

Example:

mostFrequentDays(2427) => ['Friday']
mostFrequentDays(2185) => ['Saturday']
mostFrequentDays(2860) => ['Thursday', 'Friday']
*/

function mostFrequentDays(year) {
  const days = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0,
  };

  let date = new Date(year, 0, 1).getTime();

  while (date < new Date(year + 1, 0, 1).getTime()) {
    const time = new Date(date);

    if (time.getDay() === 1) days.Monday += 1;
    if (time.getDay() === 2) days.Tuesday += 1;
    if (time.getDay() === 3) days.Wednesday += 1;
    if (time.getDay() === 4) days.Thursday += 1;
    if (time.getDay() === 5) days.Friday += 1;
    if (time.getDay() === 6) days.Saturday += 1;
    if (time.getDay() === 0) days.Sunday += 1;

    date += 86400000;
  }

  const max = Math.max(...Object.values(days));

  return Object.entries(days).filter(e => e[1] === max).map(e => e[0]);
}