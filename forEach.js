var Benchmark = require('benchmark');

var PowerArray = require('PowerArray'),
    fast = require('fast.js'),
    _ = require('underscore')
    lodash = require('lodash');

var i,
  LEN = 1e7,
  array = Array();

for (i=0; i < LEN; i++) {
  var rnd = Math.floor(Math.random() * 100 + 1);
  array.push(rnd);

  var p = i/LEN*100;
  if (p % 10 === 0) {
    console.log(p+'% complete');
  }
}

var parray = new PowerArray(array);
var iarray = new Uint16Array(array);

var suite = new Benchmark.Suite;

suite

.add('array.forEach', function() {
  array.forEach(function (i) {
    i * 2;
  });
})

.add('Array.prototype.forEach on array', function() {
  Array.prototype.forEach.call(array,function (i) {
    i * 2;
  });
})

.add('Array.prototype.forEach on Uint16Array', function() {
  Array.prototype.forEach.call(iarray,function (i) {
    i * 2;
  });
})

.add('Array.prototype.forEach on PowerArray', function() {
  Array.prototype.forEach.call(parray, function (i) {
    i * 2;
  });
})


.add('powerArray.forEach', function() {
  parray.forEach(function (i) {
    i * 2;
  });
})

.add('PowerArray.prototype.forEach on Uint16Array', function() {
  PowerArray.prototype.forEach.call(iarray, function (i) {
    i * 2;
  });
})

.add('fast.js on Array', function() {
  fast.forEach(array,function (i) {
    i * 2;
  });
})

/*.add('fast.js on Uint16Array', function() {  // fast.js treats non-instanceof Arrays as objects
  fast.forEach(iarray,function (i) {
    i * 2;
  });
}) */

.add('fast.js on PowerArray', function() {
  fast.forEach(parray,function (i) {
    i * 2;
  });
})

.add('underscore on Array', function() {
  _.forEach(array,function (i) {
    i * 2;
  });
})

.add('underscore on Uint16Array', function() {
  _.forEach(iarray,function (i) {
    i * 2;
  });
})

.add('lodash on Array', function() {
  lodash.forEach(array,function (i) {
    i * 2;
  });
})

.add('lodash on Uint16Array', function() {
  lodash.forEach(iarray,function (i) {
    i * 2;
  });
})

.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})

.run({ 'async': true });
