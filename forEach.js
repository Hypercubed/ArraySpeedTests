
console.log('\n# forEach');

var Benchmark = require('benchmark');

var PowerArray = require('PowerArray'),
    BoostArray = require('./lib/BoostArray'),
    fast = require('fast.js'),
    _ = require('underscore'),
    lodash = require('lodash'),
    ramda = require('ramda');

var fastForEach = require('fast.js/array/forEach');

require('./lib/PoweredArray');

//var assert = require('assert');

var i,
  LEN = 1e7,
  array = Array();

for (i=0; i < LEN; i++) {
  var rnd = Math.floor(Math.random() * 100 + 1);
  array.push(rnd);

  var p = i/LEN*100;
  //if (p % 10 === 0) {
  //  console.log(p+'% complete');
  //}
}

var parray = new PowerArray(array);
var iarray = new Uint16Array(array);
var barray = BoostArray(array.slice(0));

var eachFn = function (i) {
  i * Math.floor(Math.random() * 100 + 1);
}

var suite = new Benchmark.Suite;

suite

.add('for loop', function() {

  var i = 0,
      len = array.length;

  for (; i < len; i++) {
    eachFn(array[i],i);
  }

})

.add('while', function() {

  var i = -1,
      len = array.length;

  while (++i < len) {
    eachFn(array[i],i);
  }

})

.add('array.forEach', function() {
  array.forEach(eachFn);
})

/* .add('Array.prototype.forEach on array', function() {
  Array.prototype.forEach.call(array,eachFn);
})

.add('Array.prototype.forEach on Uint16Array', function() {
  Array.prototype.forEach.call(iarray,eachFn);
})

.add('Array.prototype.forEach on PowerArray', function() {
  Array.prototype.forEach.call(parray, eachFn);
}) */

.add('array.$forEach', function() {
  array.$forEach(eachFn);
})

.add('powerArray.forEach', function() {
  parray.forEach(eachFn);
})

.add('boostArray.$forEach', function() {
  barray.$forEach(eachFn);
})

//.add('PowerArray.prototype.forEach on Uint16Array', function() {
//  PowerArray.prototype.forEach.call(iarray, eachFn);
//})

.add('fast.forEach', function() {
  fast.forEach(array,eachFn);
})

//.add('fast.forEach on Uint16Array', function() {  // fast.forEach treats non-instanceof Arrays as objects
//  fastForEach(iarray,eachFn);
//})

//.add('fast.forEach on PowerArray', function() {
//  fast.forEach(parray,eachFn);
//})

.add('underscore.forEach', function() {
  _.forEach(array,eachFn);
})

//.add('underscore.forEach on Uint16Array', function() {
//  _.forEach(iarray,eachFn);
//})

.add('lodash.forEach', function() {
  lodash.forEach(array,eachFn);
})

//.add('lodash.forEach on Uint16Array', function() {
//  lodash.forEach(iarray,eachFn);
//})

.add('ramda.forEach', function() {
  ramda.forEach(eachFn, array);
})

.on('cycle', function(event) {
  if (event.target.aborted) {
    console.log(String(event.target)+' aborted');
    return;
  }
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})

.run({ 'async': true });
