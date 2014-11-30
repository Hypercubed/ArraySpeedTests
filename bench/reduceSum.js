
(function() {
  'use strict';

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var setup = load('./setup.js')  || root.setup;

  var Benchmark = load('benchmark') || root.Benchmark;

  var PowerArray = load('PowerArray') || root.PowerArray,
    BoostArray = load('../lib/BoostArray') || root.BoostArray,
    fast = load('fast.js') || root.fast,
    underscore = load('underscore') || root._,
    lodash = load('lodash') || root.lodash,
    ramda = load('ramda') || root.R;

  load('../lib/PoweredArray');

  var assert = load('assert') || function fail(actual, expected, message) {
    if (actual !== expected) {
      throw message || 'error';
    }
  };

  var array = setup.randomIntArray(1e7);
  var parray = new PowerArray(array);
  //var iarray = new Uint16Array(array);
  var barray = BoostArray(array.slice(0));

  console.log('\n# reduce Sum');

  var reduceFn = function (p, i) {
    return p+i;
  };

  var testSum = array.reduce(reduceFn,0);

  var suite = new Benchmark.Suite();

  suite

  .add('for loop', function() {

    var i = 0, acc = 0,
    len = array.length;

    for (; i < len; i++) {
      acc = reduceFn(acc, array[i],i);
    }
    assert(acc,testSum);
  })

  .add('while', function() {

    var i = -1, acc = 0,
    len = array.length;

    while (++i < len) {
      acc = reduceFn(acc, array[i],i);
    }
    assert(acc,testSum);
  })

  .add('array.reduce', function() {
    var r = array.reduce(reduceFn,0);
    assert(r,testSum);
  })

  /* .add('Array.prototype.reduce on array', function() {
    var r = Array.prototype.reduce.call(array,reduceFn);
    assert(r,testSum);
  })

  .add('Array.prototype.reduce on Uint16Array', function() {
  var r = Array.prototype.reduce.call(iarray,reduceFn,0);
  assert(r,testSum);
  })

  .add('Array.prototype.reduce on PowerArray', function() {
  var r = Array.prototype.reduce.call(parray, reduceFn,0);
  assert(r,testSum);
  }) */

  .add('array.$reduce', function() {
    var r = array.$reduce(reduceFn,0);
    assert(r,testSum);
  })

  .add('powerArray.forEach', function() {
    var r = 0;
    parray.forEach(function (i) {
      r += i;
    });
    assert(r,testSum);
  })

  .add('boostArray.$reduce', function() {
    var r = barray.$reduce(reduceFn,0);
    assert(r,testSum);
  })

  /* .add('PowerArray.prototype.forEach on Uint16Array', function() {
  var r = 0;
  PowerArray.prototype.forEach.call(iarray, function (i) {
  r += i;
  });
  assert(r,testSum);
  }) */

  .add('fast.reduce', function() {
    var r = fast.reduce(array,reduceFn, 0);
    assert(r,testSum);
  })

  /* .add('fast.reduce on Uint16Array', function() {  // fast.reduce treats non-instanceof Arrays as objects
  var r = fastReduce(iarray,reduceFn, 0);
  assert(r,testSum);
  })

  .add('fast.reduce on PowerArray', function() {
  var r = fast.reduce(parray,reduceFn,0);
  assert(r,testSum);
  }) */

  .add('underscore.reduce', function() {
    var r = underscore.reduce(array,reduceFn,0);
    assert(r,testSum);
  })

  /* .add('underscore.reduce on Uint16Array', function() {
  var r = _.reduce(iarray,reduceFn,0);
  assert(r,testSum);
  }) */

  .add('lodash.reduce', function() {
    var r = lodash.reduce(array,reduceFn,0);
    assert(r,testSum);
  })

  .add('ramda.reduce', function() {
    var r = ramda.reduce(reduceFn,0,array);
    assert(r,testSum);
  })

  /* .add('lodash.reduce on Uint16Array', function() {
  var r = lodash.reduce(iarray,reduceFn,0);
  assert(r,testSum);
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

  .run();

}).call(this);
