/*
You have three input arguments -> actually cards -> actually strings :)

Let's play the game 'Twenty-one' creating a function that returns:

'twenty-one' ---> if the sum of cards equals 21
'more' ---> if the sum of cards more than 21
'less' ---> if the sum of cards less than 21
One nuance - we have lost spades cards of our deck and now it look like (preloaded as deck) that:

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥'];
A few games:

('3♣', 'J♦', 'Q♥') -> 'less' // 3 + 2 + 3 < 21
('7♣', '7♦', '7♥') -> 'twenty-one' // 7 + 7 + 7  == 21
('10♣', 'Q♣','9♦') -> 'more' // 10 + 3 + 9 > 21
Some details:

the result does not depend on suit
ace can be only 11 points
points of J,Q,K are 2,3,4
More details here: https://en.wikipedia.org/wiki/Blackjack
*/

function twentyOne(...cards) {
  const obj = { J: 2, Q: 3, K: 4, A: 11 };

  const sum = cards
    .map((v) => v.slice(0, -1).replace(/(J|Q|K|A)/g, (v) => obj[v]))
    .reduce((acc, v) => acc + +v, 0);

  return sum === 21 ? 'twenty-one' : sum < 21 ? 'less' : 'more';
}
