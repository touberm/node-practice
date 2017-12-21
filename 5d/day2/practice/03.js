const fs = require("fs");

fs.stat('./list.md',(err,stats)=>{
  if(err){
    console.error(err);
    fs.writeFile('./list.md',new Date(),'utf8',(err)=>{
      if(err) console.error(err);
      console.log('文件不存在,直接创建')
    });
  }else{
    fs.unlink('./list.md',(err,stats)=>{
      fs.writeFile('./list.md',new Date(),'utf8',(err)=>{
        if(err) console.error(err);
        console.log('文件删除后进行创建')
      });
    })
  }
  
});