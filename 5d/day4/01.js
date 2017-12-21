//创建文件夹
'use strict';

const path = require('path');
const fs = require('fs');

const mkdirs = require('./mkdirs');



mkdirs('./demo1',(err)=>{
  console.log(err);
});
mkdirs('./demo2/demo3',(err)=>{
  console.log(err);
});