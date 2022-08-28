/*
Most football fans love it for the goals and excitement. Well, this Kata doesn't. You are to handle the referee's little notebook and count the players who were sent off for fouls and misbehavior.

The rules: Two teams, named "A" and "B" have 11 players each; players on each team are numbered from 1 to 11. Any player may be sent off the field by being given a red card. A player can also receive a yellow warning card, which is fine, but if he receives another yellow card, he is sent off immediately (no need for a red card in that case). If one of the teams has less than 7 players remaining, the game is stopped immediately by the referee, and the team with less than 7 players loses.

A card is a string with the team's letter ('A' or 'B'), player's number, and card's color ('Y' or 'R') - all concatenated and capitalized. e.g the card 'B7Y' means player #7 from team B received a yellow card.

The task: Given a list of cards (could be empty), return the number of remaining players on each team at the end of the game (as a tuple of 2 integers, team "A" first). If the game was terminated by the referee for insufficient number of players, you are to stop the game immediately, and ignore any further possible cards.

Note for the random tests: If a player that has already been sent off receives another card - ignore it.
*/

function menStillStanding(cards) {
  const teams = {
    A: new Array(11).fill(''),
    B: new Array(11).fill(''),
  };

  let a = 0;
  let b = 0;
  const count = (team) => teams[team].filter((v) => v !== 'R').length;

  for (let i = 0; i < cards.length; i++) {
    const team = cards[i][0];
    const card = cards[i][cards[i].length - 1];
    const num = cards[i].match(/\d+/) - 1;

    if (teams[team][num] === 'Y') {
      teams[team][num] = 'R';
    }
    if (teams[team][num] !== 'R') {
      teams[team][num] = card;
    }

    a = count('A');
    b = count('B');

    if (a < 7 || b < 7) return [a, b];
  }

  return [a || 11, b || 11];
}
