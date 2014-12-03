
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
      ramda = load('ramda') || root.R;

  var LEN = 1e7, testSum;
  var array, parray, barray;

  function reduceFn(p, i) {
    return p+i;
  }
  function check(test,r) {
    assert(r,testSum,test);
  }

  var suite = new Benchmark.Suite('reduce');

  setup(suite)
    .on('start', function() {
      array = setup.randomIntArray(LEN);
      parray = new PowerArray(array);
      barray = boostArray(array.slice(0));

      testSum = array.reduce(reduceFn,0);
    })

    .add('for loop', function() {

      var i = 0, r = 0,
          len = array.length;

      for (; i < len; i++) {
        r = reduceFn(r, array[i]);
      }
      check(this,r);
    })

    .add('while', function() {

      var i = -1, r = 0,
          len = array.length;

      while (++i < len) {
        r = reduceFn(r, array[i]);
      }
      check(this,r);
    })

    .add('array.reduce', function() {
      var r = array.reduce(reduceFn,0);
      check(this,r);
    })

    .add('powerArray.forEach', function() {
      var r = 0;
      parray.forEach(function (i) {
        r += i;
      });
      check(this,r);
    })

    .add('boostArray.$reduce', function() {
      var r = barray.$reduce(reduceFn,0);
      check(this,r);
    })

    .add('fast.reduce', function() {
      var r = fast.reduce(array,reduceFn, 0);
      check(this,r);
    })

    .add('underscore.reduce', function() {
      var r = underscore.reduce(array,reduceFn,0);
      check(this,r);
    })

    .add('lodash.reduce', function() {
      var r = lodash.reduce(array,reduceFn,0);
      check(this,r);
    })

    .add('ramda.reduce', function() {
      var r = ramda.reduce(reduceFn,0,array);
      check(this,r);
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
