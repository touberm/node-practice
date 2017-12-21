'use strict';

const http = require('http');

let count = 0;

const server = http.createServer((req,res) => {
  if (req.url == '/favicon.ico') {
    return;
  }
  res.writeHead(200,{'content-type':'text/html;charset=utf8;'})
  res.write(`成功登陆,顺序号:${count++}`);
  res.end();
})

server.listen(2080,'172.16.63.130',(error) => {
  if(error) throw error;
  console.log('服务开启成功,端口号2080');
})