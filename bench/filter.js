(function () {
  'use strict';

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var Benchmark = load('benchmark') || root.Benchmark;

  var setup = load('./setup.js') || root.setup,
    assert = setup.assert;

  var PowerArray = load('PowerArray') || root.PowerArray,
    BoostArray = load('BoostArray') || root.BoostArray,
    fast = load('fast.js') || root.fast,
    underscore = load('underscore') || root._,
    lodash = load('lodash') || root.lodash,
    ramda = load('ramda') || root.R;

  var LEN = 1e7;
  var array = setup.randomIntArray(LEN);
  var parray = new PowerArray(array);
  var barray = BoostArray(array.slice(0));

  function filterFn(i) {
    return i % 3 === 0 || i % 5 === 0;
  };

  var testResults = array.filter(filterFn);

  function check(result) {
    assert(result.length, testResults.length, this);
    assert(result[0], testResults[0], this);
    assert(result[testResults.length - 1], testResults[testResults.length - 1], this);
  }

  var suite = new Benchmark.Suite('filter');

  suite

  .add('for loop', function () {

    var r = [],
      ri = -1;

    for (var i = 0, len = array.length; i < len; i++) {
      var value = array[i];
      if (filterFn(value)) {
        r[++ri] = value;
      }
    }

    check.call(this, r);

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

    check.call(this, r);

  })

  .add('array.filter', function () {
    var r = array.filter(filterFn);
    check.call(this, r);
  })

  .add('powerArray.filter', function () {
    var r = parray.filter(filterFn);
    check.call(this, r);
  })

  .add('boostArray.$filter', function () {
    var r = barray.$filter(filterFn);
    check.call(this, r);
  })

  .add('fast.filter', function () {
    var r = fast.filter(array, filterFn);
    check.call(this, r);
  })

  .add('underscore.filter', function () {
    var r = underscore.filter(array, filterFn);
    check.call(this, r);
  })

  .add('lodash.filter', function () {
    var r = lodash.filter(array, filterFn);
    check.call(this, r);
  })

  .add('ramda.filter', function () {
    var r = ramda.filter(filterFn, array);
    check.call(this, r);
  });

  setup(suite).run();

}).call(this);
