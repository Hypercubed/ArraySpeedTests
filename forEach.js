
var PowerArray = require('PowerArray'),
    fast = require('fast.js'),
    _ = require('underscore')
    lodash = require('lodash');

var i,
  LEN = 1e7,
  array = Array();

function format(s) {
  return (s[0] * 1e3 + s[1] / 1e6) / 1e3;
}

function ops_per_sec(s) {
  return (LEN / format(s)).toExponential();
}

function report(s,t) {
  console.log(s+' complete in ' + format(t) + ', ops/s: ' + ops_per_sec(t));
}

function bench(s, fn, n) {
  var t = process.hrtime();
  fn();
  t = process.hrtime(t);
  var ops = ops_per_sec(t);
  n = n || ops;

  s += '\t' + format(t) + ' s\t' + ops + ' ops/s';
  s += '\t( '+Math.round((ops-n)/n*100, 2)+'% )'
  console.log(s);
  return ops;
}

function xbench(s) {
  //console.log(s+' (pending)');
};

function rand() {
  return Math.floor(Math.random() * 100 + 1);
}

for (i=0; i < LEN; i++) {
  var rnd = rand();
  array.push(rnd);

  var p = i/LEN*100;
  if (p % 10 === 0) {
    console.log(p+'% complete');
  }
}

var parray = new PowerArray(array);
var farray = new Float32Array(array);

var n = bench('array.forEach', function() {
  array.forEach(function (i) {
    i * 2;
  });
});

bench('Array.prototype.forEach on array', function() {
  Array.prototype.forEach.call(array,function (i) {
    i * 2;
  });
}, n);

bench('Array.prototype.forEach on Float32Array', function() {
  Array.prototype.forEach.call(farray,function (i) {
    i * 2;
  });
}, n);

bench('Array.prototype.forEach on PowerArray', function() {
  Array.prototype.forEach.call(parray, function (i) {
    i * 2;
  });
}, n);


bench('powerArray.forEach', function() {
  parray.forEach(function (i) {
    i * 2;
  });
}, n);

bench('fast.js on Array', function() {
  fast.forEach(array,function (i) {
    i * 2;
  });
}, n);

bench('fast.js on Float32Array', function() {
  fast.forEach(farray,function (i) {
    i * 2;
  });
}, n);

bench('fast.js on PowerArray', function() {
  fast.forEach(parray,function (i) {
    i * 2;
  });
}, n);

bench('underscore on Array', function() {
  _.forEach(array,function (i) {
    i * 2;
  });
}, n);

bench('underscore on Float32Array', function() {
  _.forEach(farray,function (i) {
    i * 2;
  });
}, n);

bench('lodash on Array', function() {
  lodash.forEach(array,function (i) {
    i * 2;
  });
}, n);

bench('lodash on Float32Array', function() {
  lodash.forEach(farray,function (i) {
    i * 2;
  });
}, n);
