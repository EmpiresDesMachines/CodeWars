/*
You should get and parse the html of the codewars leaderboard page.

You can use Nokogiri(Ruby) or BeautifulSoup(Python) or CheerioJS(Javascript).

For Javascript: Return a Promise resolved with your 'Leaderboard' Object!

Return a 'Leaderboard' object with a position property.
Leaderboard#position should contain 500 'User' objects.
Leaderboard#position[i] should return the ith ranked User(1 based index).
Each User should have the following properties
User#name    # => the user's username, not their real name
User#clan    # => the user's clan, empty string if empty clan field
User#honor   # => the user's honor points as an integer
Ex:
  an_alien = leaderboard.position[3]   # => #<User:0x3124da0 @name="myjinxin2015", @clan="China Changyuan", @honor=21446>
  an_alien.name                        # => "myjinxin2015"
  an_alien.clan                        # => "China Changyuan"
  an_alien.honor                       # => 21446

*/

const cheerio = require('cheerio');
const URL = 'https://www.codewars.com/users/leaderboard';

const axios = require('axios');

async function solution() {
  const leaderboard = {
    position: {},
  };

  const response = await axios.get(URL);
  const html = await response.data;

  let $ = cheerio.load(html);
  $(html)
    .find('table tr')
    .each((idx, el) => {
      if (idx != 0) {
        const user = {};
        user.name = $(el).find('td.is-big a').text();
        user.clan = $(el).find('td.is-big + td').text();
        user.honor = Number($(el).find('td.honor').text().replace(/,/g, ''));

        leaderboard.position[idx] = user;
      }
    });

  return leaderboard;
}
