'use strict';

let m2 = $require('./m1.js');

console.log(m2);


module.exports = {
  a: () => {
    console.log('This is A!');
  },
  b: m2.m1
}
