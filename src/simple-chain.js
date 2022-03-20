const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink( value = '( )' ) {
    //this.chain.push(value);
    this.chain.push(`${value}`);
    return this
  },
  removeLink( position ) {
    if (!Number.isInteger(position) || position > this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    };
    
    if (position === 1) {
      this.chain = this.chain.slice(1)
    } else if (position === this.chain.length) {
      this.chain = this.chain.slice(0, -1)
    } else {
      let before = this.chain.slice(0, (position-1));
      let after = this.chain.slice(position);
      this.chain = [...before, ...after]
    };

    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this
  },
  finishChain() {
    let str = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return str
  }
};

module.exports = {
  chainMaker
};
