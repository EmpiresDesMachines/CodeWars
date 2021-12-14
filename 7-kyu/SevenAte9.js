/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

*/

const sevenAte9 = (str) => str.replace(/(?<=7)97/g, '7');