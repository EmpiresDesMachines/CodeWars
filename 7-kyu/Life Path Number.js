/* 
A person's Life Path Number is calculated by adding each individual number in that person's date of birth, until it is reduced to a single digit number.

Complete the function that accepts a date of birth (as a string) in the following format: "yyyy-mm-dd". The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

You do not need to check that the input is correct format, you can assume that it will always be a valid date (as a string) with given format.
Example

For example, Albert Einstein's birthday is March 14, 1879 ("1879-03-14"). The calculation of his Life Path Number would look like this:

year  :  1 + 8 + 7 + 9 = 25  -->  2 + 5 = 7
month :  0 + 3 = 3
day   :  1 + 4 = 5
result:  7 + 3 + 5 = 15  -->  1 + 5 = 6

Einstein's Life Path Number is therefore: 6

*/

function lifePathNumber(dateOfBirth) {
  let [year, month, day] = dateOfBirth.split('-');

  while (+year > 9) {
    year = +year
      .toString()
      .split('')
      .reduce((sum, v) => sum + +v, 0);
  }

  while (+month > 9) {
    month = +month
      .toString()
      .split('')
      .reduce((sum, v) => sum + +v, 0);
  }

  while (+day > 9) {
    day = +day
      .toString()
      .split('')
      .reduce((sum, v) => sum + +v, 0);
  }

  let lifePathNumber = year + month + day;

  while (lifePathNumber > 9) {
    lifePathNumber = +lifePathNumber
      .toString()
      .split('')
      .reduce((sum, v) => sum + +v, 0);
  }

  return lifePathNumber;
}
