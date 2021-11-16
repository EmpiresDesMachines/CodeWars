/*
In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue

Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}

    You can expect valid input. You won't see input like:

    // This will NOT happen
    foo=1&foo.bar=2

    All properties and values will be strings — and the values should be left as strings to pass the tests.
    Make sure you decode the URI components correctly

*/

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  if (!query.length) return {};
  const obj = {};
  //   const list = query.split('&').map(e => e.split(/[.=]/g));
  const list = query.split('&');

  for (let i = 0; i < list.length; i++) {
    let [path, val] = list[i].split('=');
    path = path.split('.');
    let temp = obj;

    for (let j = 0; j < path.length; j++) {
      if (j === path.length - 1) {
        temp[path[path.length - 1]] = decodeURIComponent(val);
      } else {
        temp[path[j]] = temp[path[j]] || {};
        temp = temp[path[j]];
      }
    }
  }

  return obj;
}