
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

  var assert = load('assert') || function fail(actual, expected, message) {
    if (actual !== expected) {
      throw message || 'error';
    }
  };

  var LEN = 1e7;
  var array = setup.randomIntArray(LEN);
  var parray = new PowerArray(array);
  //var iarray = new Uint16Array(array);
  var barray = BoostArray(array.slice(0));

  function reduceFn(p, i) {
    return p+i;
  };
  function check(r) {
    assert(r,testSum,this);
  }

  var testSum = array.reduce(reduceFn,0);

  var suite = new Benchmark.Suite('reduce (sum)');

  suite
    .add('for loop', function() {

      var i = 0, r = 0,
          len = array.length;

      for (; i < len; i++) {
        r = reduceFn(r, array[i]);
      }
      check.call(this,r);
    })

    .add('while', function() {

      var i = -1, r = 0,
          len = array.length;

      while (++i < len) {
        r = reduceFn(r, array[i]);
      }
      check.call(this,r);
    })

    .add('array.reduce', function() {
      var r = array.reduce(reduceFn,0);
      check.call(this,r);
    })

    .add('array.$reduce', function() {
      var r = array.$reduce(reduceFn,0);
      check.call(this,r);
    })

    .add('powerArray.forEach', function() {
      var r = 0;
      parray.forEach(function (i) {
        r += i;
      });
      check.call(this,r);
    })

    .add('boostArray.$reduce', function() {
      var r = barray.$reduce(reduceFn,0);
      check.call(this,r);
    })

    .add('fast.reduce', function() {
      var r = fast.reduce(array,reduceFn, 0);
      check.call(this,r);
    })

    .add('underscore.reduce', function() {
      var r = underscore.reduce(array,reduceFn,0);
      check.call(this,r);
    })

    .add('lodash.reduce', function() {
      var r = lodash.reduce(array,reduceFn,0);
      check.call(this,r);
    })

    .add('ramda.reduce', function() {
      var r = ramda.reduce(reduceFn,0,array);
      check.call(this,r);
    });

  setup(suite).run();

}).call(this);
