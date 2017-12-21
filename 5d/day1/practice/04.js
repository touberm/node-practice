
var fs = require('fs');

var frames = [];
frames[frames.length] = `A`;
frames[frames.length] = `B`;
frames[frames.length] = `C`;
frames[frames.length] = `D`;
frames[frames.length] = `E`;

var current = 0;
var fps = 1;

var render = () => {
  process.stdout.write('\033[2J');
  process.stdout.write('\033[0f');


  if (current === frames.length) { current = 0; }
  process.stdout.write(frames[current++]);
}

setInterval(render,1000/fps);
