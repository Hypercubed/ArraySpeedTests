

(function () {
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
    ramda = load('ramda') || root.R,
    Lazy = load('lazy.js') || root.Lazy;

  var LEN = 1e7;
  var array, parray, barray, lazy_wrap;

  function filterFn(i) {
    called++;
    return i % 3 === 0 || i % 5 === 0;
  }

  var testResults, called = 0;

  function check(test, result) {
    assert(called, LEN, test);
    assert(result.length, testResults.length, test);
    assert(result[0], testResults[0], test);
    assert(result[testResults.length - 1], testResults[testResults.length - 1], test);
    called = 0;
  }

  var suite = new Benchmark.Suite('filter');

  setup(suite)

  .on('start', function() {
    array = setup.randomIntArray(LEN);
    parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lazy_wrap = Lazy(array.slice(0));

    testResults = array.filter(filterFn);
  })

  .add('for loop', function () {

    called = 0;

    var r = [],
      ri = -1;

    for (var i = 0, len = array.length; i < len; i++) {
      var value = array[i];
      if (filterFn(value)) {
        r[++ri] = value;
      }
    }

    check(this, r);

  })

  .add('while', function () {

    var len = array.length,
      r = [],
      ri = -1,
      i = -1;

    while (++i < len) {
      var value = array[i];
      if (filterFn(value)) {
        r[++ri] = value;
      }
    }

    check(this, r);

  })

  .add('array.filter', function () {
    var r = array.filter(filterFn);
    check(this, r);
  })

  .add('powerArray.filter', function () {
    var r = parray.filter(filterFn);
    check(this, r);
  })

  .add('boostArray.$filter', function () {
    var r = barray.$filter(filterFn);
    check(this, r);
  })

  .add('fast.filter', function () {
    var r = fast.filter(array, filterFn);
    check(this, r);
  })

  .add('underscore.filter', function () {
    var r = underscore.filter(array, filterFn);
    check(this, r);
  })

  .add('lodash.filter', function () {
    var r = lodash.filter(array, filterFn);
    check(this, r);
  })

  .add('ramda.filter', function () {
    var r = ramda.filter(filterFn, array);
    check(this, r);
  })

  .add('lazy_wrap.filter', function () {
    var r = lazy_wrap.filter(filterFn).toArray();
    check(this, r);
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
