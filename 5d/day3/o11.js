'use strict';

let path = require('path');
let fs = require('fs');


let target = path.join(__dirname,(process.argv[2] || './'));


fs.readdir(target,(err,file)=>{
  file.forEach((file)=>{
    fs.stat(path.join(target,file),(err,stats)=>{
      let dir = stats.isDirectory() ? '<DIR>' : '';
      let year = stats.mtime.getFullYear();
      let month = tot(stats.mtime.getMonth());
      let date = tot(stats.mtime.getDate());
      let hour = tot(stats.mtime.getHours());
      let minute = tot(stats.mtime.getMinutes());
      console.log(`${year}/${month}/${date} ${hour}:${minute}\t${dir}\t${stats.size}\t\t${file}\t`);
    })
  })
})

function tot(num){
  if(parseInt(num)<10){
    return '0' + num;
  }else{
    return num + '';
  }
}