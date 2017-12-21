'use strict';

const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname,'./lyrics/相约一九九八.lrc'),'utf8',(err,data)=>{
  if(err){
    console.log(err);
  }

  /* [03:38.092]无论咫尺天涯 */
  let regex = /\[(\d{2})\:(\d{2})\.(\d{3})\](.*)/;

  let lrcArr = data.split('\n');

  lrcArr.forEach((val,index)=>{
    let match = regex.exec(val);
    if(match){
      let m = parseInt(match[1]);
      let s = parseInt(match[2]);
      let ms = parseInt(match[3]);
      let lyric = match[4];
      setTimeout(() => {
        console.log(lyric);
      }, m*60*1000 + s*1000 + ms);
    }else{
      console.log(val);

    }
  })


})