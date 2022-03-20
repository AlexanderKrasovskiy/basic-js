const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity = 0) {
  // throw new NotImplementedError('Not implemented');

  if (typeof sampleActivity !== 'string') return false;
  let num = +sampleActivity;
  if (num <=0 || num > MODERN_ACTIVITY || Number.isNaN(num) || typeof num !== 'number') return false;
  
  const ln2 = 0.693;

  return Math.ceil(Math.log(MODERN_ACTIVITY/num) / (ln2 / HALF_LIFE_PERIOD))
}

module.exports = {
  dateSample
};
