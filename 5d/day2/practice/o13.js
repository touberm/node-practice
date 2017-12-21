
'use strict';

setInterval(function(){
  /* 清除缓存 */
  Object.keys(require.cache).forEach((key)=>{
    delete(require.cache[key]);
  })

  let date = require('./module/date')
  console.log(date.getTime());
},1000)