
(function() {
  'use strict';

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var Benchmark = load('benchmark') || root.Benchmark;

  var setup = load('./setup.js')  || root.arraySpeedTest.setup,
      assert = setup.assert;

  var PowerArray = load('PowerArray') || root.PowerArray,
      boostArray = load('BoostArray') || root.BoostArray,
      fast = load('fast.js') || root.fast,
      underscore = load('underscore') || root._,
      lodash = load('lodash') || root.lodash,
      ramda = load('ramda') || root.R,
      Lazy = load('lazy.js') || root.Lazy;

  var LEN = 1e7;
  var array, parray, barray, lazy_wrap;

  var called = 0;
  function eachFn(i) {
    i * Math.floor(Math.random() * 100 + 1);
    called++;
  }
  function check(test) {
    assert(called,LEN,test);
    called = 0;
  }

  var suite = new Benchmark.Suite('forEach');

  setup(suite)
    .on('start', function() {
      array = setup.randomIntArray(LEN);
      parray = new PowerArray(array);
      barray = boostArray(array.slice(0));
      lazy_wrap = Lazy(array.slice(0));
    })

    .add('for loop', function() {
        for (var i = 0, len = array.length; i < len; i++) {
          eachFn(array[i]);
        }
        check(this);
    })

    .add('while', function() {

      var i = -1,
          len = array.length;

      while (++i < len) {
        eachFn(array[i]);
      }
      check(this);

    })

    .add('array.forEach', function() {
      array.forEach(eachFn);
      check(this);
    })

    .add('powerArray.forEach', function() {
      parray.forEach(eachFn);
      check(this);
    })

    .add('boostArray.$forEach', function() {
      barray.$forEach(eachFn);
      check(this);
    })
    .add('fast.forEach', function() {
      fast.forEach(array,eachFn);
      check(this);
    })

    .add('underscore.forEach', function() {
      underscore.forEach(array,eachFn);
      check(this);
    })

    .add('lodash.forEach', function() {
      lodash.forEach(array,eachFn);
      check(this);
    })

    .add('ramda.forEach', function() {
      ramda.forEach(eachFn, array);
      check(this);
    })

    .add('lazy_wrap.each', function() {
      lazy_wrap.each(eachFn);
      check(this);
    });

  if( typeof exports !== 'undefined' ) {
    if(module === require.main) {
      suite.run();
    } else {
      module.exports = suite;
    }
  }
  else {
    root.arraySpeedTest[suite.name] = suite;
  }

}).call(this);
