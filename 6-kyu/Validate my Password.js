/*
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.
*/

function validPass(password) {
  if (password.length <= 3 || password.length > 20) return 'INVALID';
  if (password.match(/\W/)) return 'INVALID';
  if (/[a-z]/gi.test(password) && /\d/.test(password)) return 'VALID';

  return 'INVALID';
}