'use strict';

let path = require('path');
let fs = require('fs');

// 目标路径
let target = path.join(__dirname, process.argv[2] || './');
let level = 0;


load(target,level);

function load(target,deep){
  let dirInfos = fs.readdirSync(target);
  
  let dir = [];
  let file = [];

  let deepArr = [];
  for(let i = 0;i<deep;i++){
    
    deepArr.push(`g `)
  };
  deepArr = deepArr.toString();
  
  dirInfos.forEach((val)=>{
    let stats = fs.statSync(path.join(target,val));
    if(stats.isDirectory()){
      dir.push(val);
    }else{
      file.push(val);
    }
  })
  // ├└ ┏┣┗  │ 
  // ├┝
  let out = [];
  // 将dir和file储存在一个数组中
  for(let i = 0 ;i<(dir.length+file.length);i++){
    if(i<dir.length){
      out.push(dir[i]);
    }else{
      out.push(file[i-dir.length]);
    }
  }
  
  // 依次输出
  out.forEach((val,ind)=>{
    if(ind == out.length-1){
      console.log(`${deepArr}┗ ${val}`);
    }else{
      console.log(`${deepArr}|- ${val}`);
      let stats = fs.statSync(path.join(target,val));
      // 当是文件夹时,
      if(stats.isDirectory()){
        // 递归调用自身,传入新的地址
        load(path.join(target,val),(deep+1))
      }
    }
    
  })
  
}

