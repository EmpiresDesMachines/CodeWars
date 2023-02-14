/*
Get the list of integers for Codewars Leaderboard score (aka Honor) in descending order

Note:
if it was the bad timing, the data could be updated during your test cases.
Try several times if you had such experience.
*/

const getLeaderboardHonor = async () => {
  const response = await fetch(
    "https://www.codewars.com/users/leaderboard",
  ).then((r) => r.text());
  return response.match(/\d+,\d{3}/g).map((v) => +v.replace(/,/, ""));
};
