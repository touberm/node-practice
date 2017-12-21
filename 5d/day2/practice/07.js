'use strict';

const http = require('http');

/* process获取执行node时的参数的数组 */
let args = process.argv.slice(2);

if(args.length != 3){
  console.log('参数不合法');
  throw error;
}

let num1 = args[0];
let opt = args[1];
let num2 = args[2];


let result;

switch (opt) {
  case '+':
    result = parseFloat(num1) + parseFloat(num2);
    break;
  case '-':
    result = parseFloat(num1) - parseFloat(num2);
    break;
  case '*':
    result = parseFloat(num1) * parseFloat(num2);
    break;
  case '/':
  case '÷':
    result = parseFloat(num1) / parseFloat(num2);
    break;

  default:
    throw new Error('不支持的操作符'+opt);
    break;
}

console.log(result);


