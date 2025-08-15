/*
Krazy King BlackJack is just like blackjack, with one difference: the kings! Instead of the kings being simply worth 10 points, kings are worth either 10 points or some other number of points announced by the dealer at the start of the game. Whichever value yields the best hand is the one that plays (much like how aces are worth either 1 or 11 points).

Write a function that inputs a list of strings (representing a blackjack hand) and an integer that represents the alternative king value. The function should output an integer representing the value of the hand if it is less than or equal to 21, and False if it exceeds 21. Other than the alternative king value, normal blackjack rules apply.

The cards, in order ace-through king, are represented as strings as follows:

['A', '2', '3','4', '5', '6','7', '8', '9','10', 'J', 'Q','K']
A hand has between 2 and 20 cards, inclusive. The alternative king value is between 2 and 9, inclusive.

Blackjack rules: the value of a hand is determined by maximizing the value of the sum of its cards while not exceeding 21 if possible. Number cards are worth their value, Jacks ('J') and Queens ('Q') are worth 10, Aces are worth either 1 or 11, and kings, again, are worth either 10 or their alternative value.
*/

function krazyKingBlackjack(hand, king) {
  const arr = [];

  const calc = hand.reduce(
    (acc, v) => acc + (Number(v) || (v === "A" ? 1 : v === "K" ? king : 10)),
    0,
  );

  arr.push(calc);

  if (hand.includes("K")) {
    arr.push(calc + 10 - king);
  }

  if (hand.includes("A")) {
    arr.push(calc + 10);
  }

  return arr.filter((a, b) => a <= 21).sort((a, b) => b - a)[0] || false;
}
