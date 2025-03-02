/*
Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:


For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

0 is a space in the string.
1 is used to separate letters with the same number.
always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
you cannot return digits.
Given a empty string, return empty string.
Return a lowercase string.
Examples:
"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "
*/

function phoneWords(str) {
  const kb = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
    0: " ",
  };

  return str.replace(/(\d)\1*/g, (match, num) => {
    if (num === "1") return "";
    if (match.length > kb[num].length) {
      const rep = Math.floor(match.length / kb[num].length);
      const rem = match.length % kb[num].length;

      return (
        kb[num].slice(-1).repeat(rep) +
        (rem ? kb[num][(match.length % kb[num].length) - 1] : "")
      );
    }

    return kb[num][match.length - 1];
  });
}
