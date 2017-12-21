'use strict';
const info1 = require('./module/module2');
info1.info('he');
let person = new info1.People();

person.sayName('LiMing');
person.sayAge('46');