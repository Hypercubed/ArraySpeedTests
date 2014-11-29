
console.log('\n# filter');

var Benchmark = require('benchmark');

var PowerArray = require('PowerArray'),
    fast = require('fast.js'),
    _ = require('underscore')
    lodash = require('lodash');

var fastForEach = require('fast.js/array/filter')

var assert = require('assert');

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

var filterFn = function (i) {
  return i % 3 === 0 || i % 5 === 0;
}

var testLength = array.filter(filterFn).length;

var suite = new Benchmark.Suite;

suite

.add('for loop', function() {

  var len = array.length,
      r = [],
      i = 0;

  for (; i < len; i++) {
    if (filterFn(array[i], i)) {
      r.push(array[i]);
    }
  }

  assert(r.length, testLength);

})

.add('array.filter', function() {
  var r = array.filter(filterFn);
  assert(r.length, testLength);
})

/* .add('Array.prototype.filter on array', function() {
  var r = Array.prototype.filter.call(array,filterFn);
  assert(r.length, testLength);
})

.add('Array.prototype.filter on Uint16Array', function() {
  var r = Array.prototype.filter.call(iarray,filterFn);
  assert(r.length, testLength);
})*/

.add('Array.prototype.filter on PowerArray', function() {
  var r = Array.prototype.filter.call(parray, filterFn);
  assert(r.length, testLength);
})

.add('powerArray.filter', function() {
  var r = parray.filter(filterFn);
  assert(r.length, testLength);
})

/* .add('PowerArray.prototype.filter on Uint16Array', function() {
  var r = PowerArray.prototype.filter.call(iarray, filterFn);
  assert(r.length, testLength);
}) */

.add('fast.filter on Array', function() {
  var r = fast.filter(array,filterFn);
  assert(r.length, testLength);
})

/* .add('fast.filter on Uint16Array', function() {  // fast.filter treats non-instanceof Arrays as objects
  var r = fastForEach(iarray,filterFn);
  assert(r.length, testLength);
}) */

.add('fast.filter on PowerArray', function() {
  var r = fast.filter(parray,filterFn);
  assert(r.length, testLength);
})

.add('underscore.filter on Array', function() {
  var r = _.filter(array,filterFn);
  assert(r.length, testLength);
})

/* .add('underscore.filter on Uint16Array', function() {
  var r = _.filter(iarray,filterFn);
  assert(r.length, testLength);
}) */

.add('lodash.filter on Array', function() {
  var r = lodash.filter(array,filterFn);
  assert(r.length, testLength);
})

/* .add('lodash.filter on Uint16Array', function() {
  var r = lodash.filter(iarray,filterFn);
  assert(r.length, testLength);
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
