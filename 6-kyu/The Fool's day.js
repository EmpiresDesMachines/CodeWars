/*
Fool's Day

Since today is April's Fools day,Abigail suspects that the news she is reading about today are false. She is worried to look silly to other participants.

She knows that the news is false if it contains the string "abigail" as a subsequence.

Help Abigail determine whether this piece of news is true.

INPUT The first and only line contains a non-empty string s of length no greater than 1000, consisting of lowercase letters of Latin alphabet (a-z).

OUTPUT Output YES if the string s contains the sequence "abigail" as a subsequence. Otherwise, output NO

*/

function newsIsFalse(news) {
  const abigail = 'abigail';
  let fool = 0;

  for (let i = 0; i < news.length; i++) {
    if (news[i] === abigail[fool]) fool++;
  }

  return fool === abigail.length ? 'YES' : 'NO';
}