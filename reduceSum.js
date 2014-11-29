
console.log('\n# reduce Sum');

var Benchmark = require('benchmark');

var PowerArray = require('PowerArray'),
    BoostArray = require('./lib/BoostArray'),
    fast = require('fast.js'),
    _ = require('underscore')
    lodash = require('lodash')
    ramda = require('ramda');

var fastReduce = require('fast.js/array/reduce');

require('./lib/PoweredArray');

var assert = require('assert');

var i,
  LEN = 1e7,
  array = Array();

for (i=0; i < LEN; i++) {
  var rnd = Math.floor(Math.random() * 100 + 1);
  array.push(rnd);

  var p = i/LEN*100;
  //if (p % 10 === 0) {
    //console.log(p+'% complete');
  //}
}

var parray = new PowerArray(array);
var iarray = new Uint16Array(array);
var barray = BoostArray(array.slice(0));

var reduceFn = function (p, i) {
  return p+i;
}

var testSum = array.reduce(reduceFn,0);

var suite = new Benchmark.Suite;

suite

.add('for loop', function() {

  var i = 0, r = 0,
      len = array.length;

  for (; i < len; i++) {
    r += array[i];
  }
  assert.equal(r,testSum);
})

.add('array.reduce', function() {
  var r = array.reduce(reduceFn,0);
  assert.equal(r,testSum);
})

/* .add('Array.prototype.reduce on array', function() {
  var r = Array.prototype.reduce.call(array,reduceFn);
  assert.equal(r,testSum);
})

.add('Array.prototype.reduce on Uint16Array', function() {
  var r = Array.prototype.reduce.call(iarray,reduceFn,0);
  assert.equal(r,testSum);
})

.add('Array.prototype.reduce on PowerArray', function() {
  var r = Array.prototype.reduce.call(parray, reduceFn,0);
  assert.equal(r,testSum);
}) */

.add('array.$reduce', function() {
  var r = array.$reduce(reduceFn,0);
  assert.equal(r,testSum);
})

.add('powerArray.forEach', function() {
  var r = 0;
  parray.forEach(function (i) {
    r += i;
  });
  assert.equal(r,testSum);
})

.add('boostArray.$reduce', function() {
  var r = barray.$reduce(reduceFn,0);
  assert.equal(r,testSum);
})

/* .add('PowerArray.prototype.forEach on Uint16Array', function() {
  var r = 0;
  PowerArray.prototype.forEach.call(iarray, function (i) {
    r += i;
  });
  assert.equal(r,testSum);
}) */

.add('fast.reduce', function() {
  var r = fast.reduce(array,reduceFn, 0);
  assert.equal(r,testSum);
})

/* .add('fast.reduce on Uint16Array', function() {  // fast.reduce treats non-instanceof Arrays as objects
  var r = fastReduce(iarray,reduceFn, 0);
  assert.equal(r,testSum);
})

.add('fast.reduce on PowerArray', function() {
  var r = fast.reduce(parray,reduceFn,0);
  assert.equal(r,testSum);
}) */

.add('underscore.reduce', function() {
  var r = _.reduce(array,reduceFn,0);
  assert.equal(r,testSum);
})

/* .add('underscore.reduce on Uint16Array', function() {
  var r = _.reduce(iarray,reduceFn,0);
  assert.equal(r,testSum);
}) */

.add('lodash.reduce', function() {
  var r = lodash.reduce(array,reduceFn,0);
  assert.equal(r,testSum);
})

.add('ramda.reduce', function() {
  var r = ramda.reduce(reduceFn,0,array);
  assert.equal(r,testSum);
})

/* .add('lodash.reduce on Uint16Array', function() {
  var r = lodash.reduce(iarray,reduceFn,0);
  assert.equal(r,testSum);
}) */

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
