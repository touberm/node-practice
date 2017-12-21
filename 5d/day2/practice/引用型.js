'use strict';
let a = {name:1};
let b = a;  //对于对象来说,引用同一个内存
console.log(a); //{name:1}
console.log(b); //{name:1}
console.log('====================================>');

b.name = 2; //修改,a同时修改

console.log(a); //{name:2}
console.log(b); //{name:2}
console.log('====================================>');

b = {name:3}; //覆盖,给b重新分配内存,此时b与a无关

console.log(a); //{name:2}
console.log(b); //{name:3}
console.log('====================================>');

