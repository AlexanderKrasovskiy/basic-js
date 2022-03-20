const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool
  }
  encrypt(...args) {
    
    if (args.length < 2 || typeof args[0] !== 'string' || typeof args[1] !== 'string') throw new Error('Incorrect arguments!');
    
    let str = args[0].toUpperCase();
    let key = args[1].toUpperCase();
    
    let shift = [...key].map(el => el.charCodeAt(0) - 65);
    
    let result = [];
    let shiftCounter = 0;
    let regEx = /[A-Z]/;
    
    for (let ch of str) {
        if (regEx.test(ch)) {
            let code = ch.charCodeAt(0);
            let newCode = code + shift[shiftCounter];
            shiftCounter++;
            if (shiftCounter >= shift.length) shiftCounter = 0;
            if (newCode > 90) newCode -= 26;
            let newChar = String.fromCharCode(newCode);
            result.push(newChar);
        } else {
            result.push(ch)
        }
    };
    
    if (this.bool) return result.join('');
    return result.reverse().join('')

  }
  decrypt(...args) {
    
    if (args.length < 2 || typeof args[0] !== 'string' || typeof args[1] !== 'string') throw new Error('Incorrect arguments!');
    
    let str = args[0].toUpperCase();
    let key = args[1].toUpperCase();
    
    let shift = [...key].map(el => el.charCodeAt(0) - 65);
    
    let result = [];
    let shiftCounter = 0;
    let regEx = /[A-Z]/;
    
    for (let ch of str) {
        if (regEx.test(ch)) {
            let code = ch.charCodeAt(0);
            let newCode = code - shift[shiftCounter];
            shiftCounter++;
            if (shiftCounter >= shift.length) shiftCounter = 0;
            if (newCode < 65) newCode += 26;
            let newChar = String.fromCharCode(newCode);
            result.push(newChar);
        } else {
            result.push(ch)
        }
    };
    
    if (this.bool) return result.join('');
    return result.reverse().join('')

  }
}

module.exports = {
  VigenereCipheringMachine
};

// npm run test -- test/vigenere-cipher.test.js


// A T  T  ack at dawn! - UPPER msg
// A L  P  hon se alph  - UPPER key
// 0 11 15              - key char Shift from A
// 0 69 73              - msg char code + shift (-26 if > 90)
// a e  i               - char at new code