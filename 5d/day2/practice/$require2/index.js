'use strict';

function $require(id){
  const fs = require('fs');
  const path = require('path');

  let filename = path.join(__dirname,id);
  let dirname = path.dirname(filename);

  console.log(filename);
  console.log(dirname);

  let code = fs.readFileSync(filename,'utf8');

  let module = {id:filename,exports:{}};
  let exports = module.exports;

  code = `
    (function($require,exports,module){
      ${code}
    })($require,exports,module);
  `
  eval(code);

  return module.exports;

}


let m = $require('./m2.js');

m.a();


let liu = new m.b();
liu.sayName('LiuBei');
liu.sayAge('60');