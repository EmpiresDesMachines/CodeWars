/*
According to Gary Chapman, marriage counselor and the author of "The Five Love Languages" books, there are five major ways to express our love towards someone: words of affirmation, quality time, gifts, acts of service, and physical touch. These are called the love languages. Usually, everyone has a main language: the one that he/she "speaks" and understands best. In a relationship, it's important to find your partner's main love language, so that you get along better with each other.

Your task
Unfortunately, your relationship got worse lately... After a long discussion with your partner, you agreed to give yourself a few weeks to improve it, otherwise you split up...

You will be given a partner instance, and n weeks. The partner has a .response method, and the responses may be: "positive" or "neutral". You can try to get a response once a day, thus you have n * 7 tries in total to find the main love language of your partner!

The love languages are: "words", "acts", "gifts", "time", "touch" (available predefined as LOVE_LANGUAGES)

Notes:
Your partner will sometimes give a positive response to any love language (a "false positive"), but the main one has a much higher possibility. On the other hand, you may get a neutral response even for the correct language, but with a low possibility (a "false negative").
There will be 50 tests. There is a slight chance (about 0.5%) to fail a test even with a proper solution, due to the randomness. So if you get 49/50, just run the tests again.
Examples
main love language: "words"

partner.response("words")  -->  "positive"
partner.response("acts")   -->  "neutral"
partner.response("words")  -->  "positive"
partner.response("time")   -->  "neutral"
partner.response("acts")   -->  "positive"    # false positive
partner.response("gifts")  -->  "neutral"
partner.response("words")  -->  "neutral"     # false negative
etc.
Happy coding, and DO try this at home! :-)

My other katas
If you enjoyed this kata then please try my other katas! :-)

Translations are welcome!
*/

function loveLanguage(partner, weeks) {
  const res = [0, 0, 0, 0, 0];

  for (let i = 0; i < weeks * 7; i++) {
    const today = Math.floor(Math.random() * res.length);
    const resp = partner.response(LOVE_LANGUAGES[today]);
    res[today] += resp === "positive" ? 1 : -1;
  }

  return LOVE_LANGUAGES[res.indexOf(Math.max.apply(null, res))];
}
