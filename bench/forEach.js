
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

  var eachFn = function (i) {
    i * Math.floor(Math.random() * 100 + 1);
  };

  console.log('\n# forEach');

  var suite = new Benchmark.Suite();

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
    underscore.forEach(array,eachFn);
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

  .run();

}).call(this);
