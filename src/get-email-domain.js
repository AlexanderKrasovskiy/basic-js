const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  email = email.split(''); // []
  let indexOfAt = email.lastIndexOf('@');
  let domain = email.slice(indexOfAt + 1);

  return domain.join('')
}

module.exports = {
  getEmailDomain
};
