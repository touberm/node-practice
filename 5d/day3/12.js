// 递归显示结构树
'use strict';

let path = require('path');
let fs = require('fs');
// process.argv[2] 获取输入路径 
let target = path.join(__dirname,process.argv[2] || './');
let deep = 1;//目录层级 通过`new Array(deep).join('链接符 ') `调用 deep大于2时才能显示

load(target,deep);



function load(target,deep){
  //target:目标路径, deep:层级
  let fileGather = fs.readdirSync(target);//获取路径下所有文件及文件夹的集合(数组)

  let dir = [];//储存文件夹数组
  let file = [];//储存文件数组
  
  let out = [];//将文件夹和文件按顺序排列的数组

  let prefix = new Array(deep).join('│ ');//设置前缀

  
  //将文件夹和文件分别放到dir和file数组中
  fileGather.forEach((ele,ind)=>{
    let stats = fs.statSync(path.join(target,ele));//获取文件信息

    if(stats.isDirectory()){
      dir.push(ele);
    }else{
      file.push(ele);
    }
    
  })

  
//文件夹排在文件前面 按顺序放入out数组
  for(let i=0 ;i<(dir.length+file.length);i++){
    if(i<dir.length){
      out.push(dir[i]);
    }else{
      out.push(file[i-dir.length]);
    }
  }

  //输出out数组
  out.forEach((ele,ind)=>{
    let stats = fs.statSync(path.join(target,ele));
    if(ind == out.length-1){
      console.log(`${prefix}└─${ele}`);//最后一位前面用└─字符
      if(stats.isDirectory()){//如果是文件夹 ,查找下一层文件 deep加1
        // 开始调用
        load(path.join(target,ele),deep+1);
      }
    }else{
      console.log(`${prefix}├─${ele}`);
      if(stats.isDirectory()){
        load(path.join(target,ele),deep+1);
      }
    }
  })



}