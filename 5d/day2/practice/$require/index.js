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


let modu = $require('./module1.js');

modu.a();

modu.b.show("I'm Liu.");