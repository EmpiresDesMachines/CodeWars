/*
You need to write a password generator that meets the following criteria:

6 - 20 characters long
contains at least one lowercase letter
contains at least one uppercase letter
contains at least one number
contains only alphanumeric characters (no special characters)
Return the random password as a string.

Note: "randomness" is checked by counting the characters used in the generated passwords - all characters should have less than 50% occurance. Based on extensive tests, the normal rate is around 35%.
*/

function passwordGen() {
  let password = '';

  while (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{6,20}$/.test(password)) {
    password = generatePassword();
  }

  return password;
}

function generatePassword() {
  let res = '';
  const char = 'abcdefghijklmnopqrstuvwxyz';
  const num = '0123456789';
  const long = minMax(6, 20);

  for (let i = 0; i < long; i++) {
    const x = minMax(0, 2);

    if (x === 0) res += char[minMax(0, 25)];
    if (x === 1) res += char[minMax(0, 25)].toUpperCase();
    if (x === 2) res += num[minMax(0, 9)];
  }
  return res;
}

function minMax(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}