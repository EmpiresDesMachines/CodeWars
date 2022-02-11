/* 
Example 1
Original phone number 	Encrypted
1-201-680-0202 	1-201-6XX-XXXX

The valid formats for the Italian and US (the last one) numbers are the following:

CASE 1: +39 <separator> ### <separator> ### <separator> ####

CASE 2: 0039 <separator> ### <separator> ### <separator> ####

CASE 3: 1 <separator> ### <separator> ### <separator> ####

The list of separators is the following:

    for Italian numbers: " ", ".", ""

    for US numbers: " ", ".", "", "-"

Example 2:
Original phone number 	Result
145-201-680-0202 	false

If prefixes are different from the three indicated above (+39, 0039, 1) return false.  
*/

function encryptNum(number) {
  if (number[0] === '1' && number.replace(/[^\d]/g, '').length !== 11) return false;
  if (!/^(0039|\+39|1)/.test(number)) return false;

  let count = 0;
  let str = '';

  for (let i = number.length - 1; i > -1; i--) {
    if (/\d/.test(number[i]) && count < 6) {
      str += 'X';
      count++;
    } else {
      str += number[i];
    }
  }

  str = str.split('').reverse().join('');

  return str;
}
