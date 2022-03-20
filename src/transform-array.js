const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];

  let copy = [...arr]
  let result = [];

  for (let i = 0; i < copy.length; i++) {

    if (copy[i] === '--discard-next' && copy[i+1] !== undefined) {
      delete copy[i+1];
      i++;
      continue
    };

    if (copy[i] === '--double-next' && copy[i+1] !== undefined) {
      result.push(copy[i+1], copy[i+1]);
      i++;
      continue
    };

    if (copy[i] === '--double-prev' && copy[i-1] !== undefined) {
      result.push(copy[i-1]);
      continue
    };

    if (copy[i] === '--discard-prev' && copy[i-1] !== undefined) {
      result.pop();
      continue
    };

    if (copy[i] === '--discard-next' || copy[i] === '--double-next' || copy[i] === '--double-prev' || copy[i] === '--discard-prev') {
      continue
    } else {
      result.push(copy[i])
    };

  };

  return result
}

module.exports = {
  transform
};
