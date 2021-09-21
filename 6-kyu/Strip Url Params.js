/*
Complete the method so that it does the following:

    Removes any duplicate query string parameters from the url (the first occurence should be kept)
    Removes any query string parameters specified within the 2nd argument (optional array)

Examples:

stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'

*/

function stripUrlParams(url, paramsToStrip = []) {
  const check = {};
  const p = [];
  let [domain, params] = url.split('?');
  if (!params) return url;
  params = params.split('&').filter(p => !paramsToStrip.includes(p[0]));

  for (let i = 0; i < params.length; i++) {
    const [prop, val] = params[i].split('=');

    if (!check.hasOwnProperty(prop)) {
      check[prop] = val;
      p.push(params[i]);
    }
  }

  return domain + (p.length > 0 ? '?' : '') + p.join('&');
}