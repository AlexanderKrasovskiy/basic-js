const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let obj = {};

  for (let d of domains) {
    let parts = d.split('.'); // []
    for (let p = (parts.length - 1); p > -1; p--) {
      let objKey = '.' + parts.slice(p).reverse().join('.');
      if (objKey in obj) {
        obj[objKey]++
      } else {
        obj[objKey] = 1
      };
    }
  };

  return obj
}

module.exports = {
  getDNSStats
};
