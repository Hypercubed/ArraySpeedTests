var cp = require('child_process');

var files = [
  './benchmarks/reduce.js',
  './benchmarks/map.js',
  './benchmarks/index-of.js',
  './benchmarks/for-each.js',
  './benchmarks/filter.js',
  './benchmarks/concat.js'
];

var platform = require('platform');
console.log('# ' + platform.description);
console.log('');

function runNext(code) {
  if (code === 0 && files.length > 0) {
    cp
      .fork(files.shift())
      .on('close', runNext);
  }
}

runNext(0);
