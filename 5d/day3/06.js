'use strict';

const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname,'./lyrics/恋曲1980 Live.lrc'),'utf8',(err,data)=>{
  if(err){
    console.log(err);
  }
  /* [00:05.201]曲：罗大佑 */
  let regex = /\[(\d{2})\:(\d{2})\.(\d{3})\](.+)/;

  let lrcArr =  data.split('\n');
  

  lrcArr.forEach((ele,index)=>{
    let match = regex.exec(ele);
    if(match){
      let m = parseInt(match[1]);
      let s = parseInt(match[2]);
      let ms = parseInt(match[3]);
      let lrc = match[4];

      setTimeout(()=>{
        console.log(`lrc: ${lrc}\n`);
      },m*60*1000+s*1000+ms);
      


    }else{
      console.log(ele);
     
    }
  })

})