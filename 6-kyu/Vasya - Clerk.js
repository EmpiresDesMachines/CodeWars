/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
Examples:

tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/

function tickets(peopleInLine) {
  const vasya = {
    25: 0,
    50: 0,
    100: 0,
  };

  for (let i = 0; i < peopleInLine.length; i++) {
    const bill = peopleInLine[i];

    if (bill === 25) vasya['25'] += 1;

    if (bill === 50) {
      if (vasya['25'] >= 1) {
        vasya['25'] -= 1;
        vasya['50'] += 1;
      } else {
        return 'NO';
      }
    }

    if (bill === 100) {
      if (vasya['50'] >= 1 && vasya['25'] >= 1) {
        vasya['50'] -= 1;
        vasya['25'] -= 1;
        vasya['100'] += 1;
      } else if (vasya['25'] >= 3) {
        vasya['25'] -= 3;
        vasya['100'] += 1;
      } else {
        return 'NO';
      }
    }
  }
  return 'YES';
}