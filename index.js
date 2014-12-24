var cp = require('child_process');

var files = [
  './bench/reduce.js',
  './bench/map.js',
  './bench/indexOf.js',
  './bench/forEach.js',
  './bench/filter.js',
  './bench/concat.js'
];

function runNext(code) {
  if (code === 0 && files.length > 0) {
    cp
      .fork(files.shift())
      .on('close', runNext);
  }
}

runNext(0);
