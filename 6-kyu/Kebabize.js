/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

Notes:

    the returned string should only contain lowercase letters
*/

function kebabize(str) {
  return str
    .replace(/[^a-zA-Z]/g, '')
    .split('').map(s => s === s.toUpperCase() ? '-' + s.toLowerCase() : s)
    .join('')
    .replace(/^-/, '');
}