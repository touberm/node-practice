
'use strict';

let path = require('path');
let fs =  require('fs');

let filename = path.join(__dirname,'./temp.txt');

/* fs.writeFile(filename,JSON.stringify({name:'libai',age:'22',job:'article'}),(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('success');
  }
}) */

let writeStream = fs.createWriteStream(filename);

setInterval(()=>{
  writeStream.write('hello\n',(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log('+1');
    }
    
  })

},1000)
