/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];
your function should return true as there is at least one developer from each age group.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/

function isAgeDiverse(list) {
  const obj = {
    teens: false,
    twenties: false,
    thirties: false,
    forties: false,
    fifties: false,
    sixties: false,
    seventies: false,
    eighties: false,
    nineties: false,
    centenarian: false,
  };
  for (let i = 0; i < list.length; i++) {
    const age = list[i]['age'];
    if (age >= 13 && age < 20) obj['teens'] = true;
    if (age >= 20 && age < 30) obj['twenties'] = true;
    if (age >= 30 && age < 40) obj['thirties'] = true;
    if (age >= 40 && age < 50) obj['forties'] = true;
    if (age >= 50 && age < 60) obj['fifties'] = true;
    if (age >= 60 && age < 70) obj['sixties'] = true;
    if (age >= 70 && age < 80) obj['seventies'] = true;
    if (age >= 80 && age < 90) obj['eighties'] = true;
    if (age >= 90 && age < 100) obj['nineties'] = true;
    if (age >= 100) obj['centenarian'] = true;
  }

  return Object.values(obj).every((v) => v == true);
}