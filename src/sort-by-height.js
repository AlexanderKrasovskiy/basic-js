const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let cleanArr = arr.filter(num => num !== -1).sort((a, b) => a - b);
  let copyArr = [...arr];
  
  let counter = 0;
  
  for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] === -1) continue;
      copyArr[i] = cleanArr[counter];
      counter++
  };
  
  return copyArr
}

module.exports = {
  sortByHeight
};
