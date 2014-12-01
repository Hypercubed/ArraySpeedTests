
(function() {
  'use strict';

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var Benchmark = load('benchmark') || root.Benchmark;

  var setup = load('./setup.js')  || root.setup,
      assert = setup.assert;

  var PowerArray = load('PowerArray') || root.PowerArray,
    BoostArray = load('../lib/BoostArray') || root.BoostArray,
    fast = load('fast.js') || root.fast,
    underscore = load('underscore') || root._,
    lodash = load('lodash') || root.lodash,
    ramda = load('ramda') || root.R;

  BoostArray(Array.prototype);  // Boost the Array prototype

  var LEN = 1e7;
  var array = setup.randomIntArray(LEN);
  var parray = new PowerArray(array);
  //var iarray = new Uint16Array(array);
  var barray = BoostArray(array.slice(0));

  var counter = 0;
  var eachFn = function (i) {
    i * Math.floor(Math.random() * 100 + 1);
    counter++;
  };

  var suite = new Benchmark.Suite('forEach');

  suite

  .add('for loop', function() {
      counter = 0;
      for (var i = 0, len = array.length; i < len; i++) {
        eachFn(array[i],i);
      }
      assert(counter,LEN,this);
  })

  .add('while', function() {

    var i = -1,
        len = array.length;

    counter = 0;
    while (++i < len) {
      eachFn(array[i],i);
    }
    assert(counter,LEN,this);

  })

  .add('array.forEach', function() {
    counter = 0;
    array.forEach(eachFn);
    assert(counter,LEN,this);
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
    counter = 0;
    array.$forEach(eachFn);
    assert(counter,LEN,this);
  })

  .add('powerArray.forEach', function() {
    counter = 0;
    parray.forEach(eachFn);
    assert(counter,LEN,this);
  })

  .add('boostArray.$forEach', function() {
    counter = 0;
    barray.$forEach(eachFn);
    assert(counter,LEN,this);
  })

  //.add('PowerArray.prototype.forEach on Uint16Array', function() {
  //  PowerArray.prototype.forEach.call(iarray, eachFn);
  //})

  .add('fast.forEach', function() {
    counter = 0;
    fast.forEach(array,eachFn);
    assert(counter,LEN,this);
  })

  //.add('fast.forEach on Uint16Array', function() {  // fast.forEach treats non-instanceof Arrays as objects
  //  fastForEach(iarray,eachFn);
  //})

  //.add('fast.forEach on PowerArray', function() {
  //  fast.forEach(parray,eachFn);
  //})

  .add('underscore.forEach', function() {
    counter = 0;
    underscore.forEach(array,eachFn);
    assert(counter,LEN,this);
  })

  //.add('underscore.forEach on Uint16Array', function() {
  //  _.forEach(iarray,eachFn);
  //})

  .add('lodash.forEach', function() {
    counter = 0;
    lodash.forEach(array,eachFn);
    assert(counter,LEN,this);
  })

  //.add('lodash.forEach on Uint16Array', function() {
  //  lodash.forEach(iarray,eachFn);
  //})

  .add('ramda.forEach', function() {
    counter = 0;
    ramda.forEach(eachFn, array);
    assert(counter,LEN,this);
  });

  setup(suite).run();

}).call(this);
