'use strict';

let m1 = function(){
  this.sayName = (str)=>{
    console.log(str);
  }
  this.sayAge = (str)=>{
    console.log(str);
  }

}

module.exports = {m1};