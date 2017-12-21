
var fs = require('fs');

var frames = [];

for(var i = 1; i<7; i++){
  frames[frames.length] = fs.readFileSync(`./frames/${i}.txt`,'utf8');
}

var current = 0;
var fps = 1;

var render = () => {
  process.stdout.write('\033[2J');
  process.stdout.write('\033[0f');


  if (current === frames.length) { current = 0; }
  process.stdout.write(frames[current++]);
}

setInterval(render,1000/fps);
