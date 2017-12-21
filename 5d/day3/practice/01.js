'use strict';

let fs = require('fs');
let path = require('path');

console.time('async');
console.time('async_callback');
fs.readFile(path.join(__dirname,'../上午06-Buffer.avi'),(err,data)=>{
  if(err){
    console.log(err);
  }
  console.log('ASync加载完毕!');
  console.timeEnd('async_callback');

  console.log(data);
})
console.timeEnd('async');


console.time('sync');
try {
  fs.readFileSync(path.join(__dirname,'../上午06-Buffer.avi'));
} catch (error) {
  throw error;
}



console.timeEnd('sync');