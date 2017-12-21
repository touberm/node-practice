//创建文件夹
'use strict';

const fs = require('fs');
const path = require('path');

function mkdirs(pathname,callback){
  // 调用模块文件的路径
  let parentFile = module.parent.filename;
  parentFile = path.dirname(parentFile);


  // 判断是否为绝对路径
  let target = path.isAbsolute(pathname) ? pathname : path.join(parentFile,pathname);
  // 转换为相对路径
  let relativePath = path.relative(parentFile,target);
  // 用当前系统分隔符分隔路径
  let folders = relativePath.split(path.sep);

  try {
    
    let preFolder = '';//前置路径 针对多层路径 如/demo2/demo3
    folders.forEach((ele,ind)=>{
      fs.mkdirSync(path.join(parentFile,preFolder,ele));
      preFolder = path.join(preFolder,ele);
    })
    callback && callback(null);
  } catch (error) {
    callback && callback(error);
  }
}

module.exports = mkdirs;