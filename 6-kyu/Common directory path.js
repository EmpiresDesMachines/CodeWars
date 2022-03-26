/*
Returns the commom directory path for specified array of full filenames.

 @param {array} pathes
 @return {string}
Examples:

  ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
  ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
  ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
  ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
(c)RSS
*/

function getCommonDirectoryPath(pathes) {
  const p = pathes.map((path) => path.split('/'));

  const expected = [];

  for (let i = 0; i < p[0].length; i++) {
    if (p.every((v) => v[i] === p[0][i])) {
      expected.push(p[0][i]);
    }
  }

  return `${expected.join('/')}${expected.length ? '/' : ''}`;
}
