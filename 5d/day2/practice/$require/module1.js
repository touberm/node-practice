'use strict';

let m = $require('./module2.js');

module.exports={
  a:()=>{
    console.log('This is a!');
  },
  b:m
}