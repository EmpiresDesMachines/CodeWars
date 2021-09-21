/*
Create a function, which escapes all HTML markup of a given string. Replacing entities of special characters is not needed.

Examples say more than words:

var strEscaped = escapeHTML('<p>Lorem ipsum dolor sit amet.</p>');           // &lt;p&gt;Lorem ipsum dolor sit amet&lt;/p&gt;
var strEscaped = escapeHTML('This text has <strong>bold</strong> markup.');  // This text has &lt;strong&gt;bold&lt;/strong&gt; markup.

Watch carefully all test fixtures. If you pass all four of them, you have solved it. :-]

If you need a good online regular expression tester: http://regex101.com/#javascript

*/

const escapeHTML = function (str) {
  return str.replace(/./g, (s) => {
    if (s === '<') return '&lt;';
    if (s === '>') return '&gt;';
    if (s === '"') return '&quot;';
    return s;
  });
};