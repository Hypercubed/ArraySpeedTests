
(function() {
  'use strict';

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var Benchmark = load('benchmark') || root.Benchmark;

  var setup = load('./setup.js')  || root.setup,
      assert = setup.assert;

  var PowerArray = load('PowerArray') || root.PowerArray,
      BoostArray = load('BoostArray') || root.BoostArray,
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
  array[5e6] = 'fizz';

  var parray = new PowerArray(array);
  var barray = BoostArray(array.slice(0));

  var testIndex = array.indexOf('fizz');
  function check(r) {
    assert(r,testIndex,this);
  }

  var suite = new Benchmark.Suite('indexOf');

  suite
    .add('for loop', function() {

      var i = 0, r = 0,
          len = array.length;

      for (; i < len; i++) {
        if (array[i] === 'fizz') {
          r = i;
          break;
        }
      }
      check.call(this,r);
    })

    .add('while', function() {

      var i = -1, r = 0,
          len = array.length;

      while (++i < len) {
        if (array[i] === 'fizz') {
          r = i;
          break;
        }
      }
      check.call(this,r);
    })

    .add('array.indexOf', function() {
      var r = array.indexOf('fizz');
      check.call(this,r);
    })

    .add('powerArray.indexOf', function() {
      var r = parray.indexOf('fizz');
      check.call(this,r);
    })

    .add('boostArray.$indexOf', function() {
      var r = barray.$indexOf('fizz');
      check.call(this,r);
    })

    .add('fast.indexOf', function() {
      var r = fast.indexOf(array,'fizz');
      check.call(this,r);
    })

    .add('underscore.indexOf', function() {
      var r = underscore.indexOf(array,'fizz');
      check.call(this,r);
    })

    .add('lodash.indexOf', function() {
      var r = lodash.indexOf(array,'fizz');
      check.call(this,r);
    })

    .add('ramda.indexOf', function() {
      var r = ramda.indexOf('fizz',array);
      check.call(this,r);
    });

  setup(suite).run();

}).call(this);
