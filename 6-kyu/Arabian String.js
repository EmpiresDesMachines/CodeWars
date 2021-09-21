/*
You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"

*/

function camelize(str) {
  return (str.match(/[a-z0-9]+/gi) || []).map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join('');
}