/* readline读取文件 */
'ust strict';

let path = require('path');
let fs =  require('fs');
let readline = require('readline');

let filename = path.join(__dirname,'./lyrics/相约一九九八.lrc');

let readStream = fs.createReadStream(filename);

let rl = readline.createInterface({input:readStream});
let regex = /\[(\d{2})\:(\d{2})\.(\d{3})\](.*)/
let begin = new Date().getTime();
rl.on('line',(line)=>{
  lyric(line,begin);
})






function lyric(line,time){
  let match = regex.exec(line);
 
  if(match){
    let m = parseInt(match[1]);
    let s = parseInt(match[2]);
    let ms = parseInt(match[3]);
    let str = match[4];
    let now = new Date().getTime();
    setTimeout(() => {
      console.log(str);
    }, m*60*1000 + s*1000 + ms - (now - time));

    
  }else{
    console.log(line);
   
  }


}