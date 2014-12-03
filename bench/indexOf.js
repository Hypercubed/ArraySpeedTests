
(function() {
  'use strict';

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var Benchmark = load('benchmark') || root.Benchmark;

  var setup = load('./setup.js') || root.arraySpeedTest.setup,
    assert = setup.assert;

  var PowerArray = load('PowerArray') || root.PowerArray,
      boostArray = load('BoostArray') || root.BoostArray,
      fast = load('fast.js') || root.fast,
      underscore = load('underscore') || root._,
      lodash = load('lodash') || root.lodash,
      ramda = load('ramda') || root.R;

  var LEN = 1e7,
    testIndex = 5e6;

  var array, parray, barray;

  function check(test, r) {
    assert(r,testIndex,test);
  }

  var suite = new Benchmark.Suite('indexOf');

  setup(suite)
    .on('start', function() {
      array = setup.randomIntArray(LEN);
      array[testIndex] = 'fizz';
      parray = new PowerArray(array);
      barray = boostArray(array.slice(0));
    })
    .add('for loop', function() {

      var i = 0,
          len = array.length;

      for (; i < len; i++) {
        if (array[i] === 'fizz') {
          break;
        }
      }
      check(this,i);
    })

    .add('while', function() {

      var i = -1,
          len = array.length;

      while (++i < len) {
        if (array[i] === 'fizz') {
          break;
        }
      }
      check(this,i);
    })

    .add('array.indexOf', function() {
      var r = array.indexOf('fizz');
      check(this,r);
    })

    .add('powerArray.indexOf', function() {
      var r = parray.indexOf('fizz');
      check(this,r);
    })

    .add('boostArray.$indexOf', function() {
      var r = barray.$indexOf('fizz');
      check(this,r);
    })

    .add('fast.indexOf', function() {
      var r = fast.indexOf(array,'fizz');
      check(this,r);
    })

    .add('underscore.indexOf', function() {
      var r = underscore.indexOf(array,'fizz');
      check(this,r);
    })

    .add('lodash.indexOf', function() {
      var r = lodash.indexOf(array,'fizz');
      check(this,r);
    })

    .add('ramda.indexOf', function() {
      var r = ramda.indexOf('fizz',array);
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
