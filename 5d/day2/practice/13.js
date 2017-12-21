'use strict';

let $require = (id) => {
  const fs = require('fs');
  const path = require('path');

  let filename = path.join(__dirname,id);
  let dirname = path.dirname(filename);

  let code = fs.readFileSync(filename,'utf8');
  
  let module = {id:filename,exports:{}};
  let exports  = module.exports;

  let str = `(function($require){
    ${code}
  })($require);`
  eval(str);

  return module.exports;

};


let m2 = $require('./module/module3.js');
m2.a();
let lm = new m2.People();
lm.sayName('LiMing');
lm.sayAge('11');

