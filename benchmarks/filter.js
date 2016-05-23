const assert = require('assert');

const suite = require('chuhai');

// const PowerArray = require('PowerArray');
const boostArray = require('BoostArray');
const fast = require('fast.js');
const underscore = require('underscore');
const lodash = require('lodash');
const ramda = require('ramda');
const lazy = require('lazy.js');

var setup = require('../scripts/setup.js');

suite('filter', function (s) {
  'use strict';
  s.set('maxTime', 1);
  s.set('minSamples', 10);

  var LEN = 1e6;
  var array;
  // var parray;
  var barray;
  var lazyWrap;

  var testResults;
  var called = 0;

  function filterFn(i) {
    called++;
    return i % 3 === 0 || i % 5 === 0;
  }

  var r = null;

  s.cycle(function () {
    assert.equal(called, LEN);
    assert.equal(r.length, testResults.length);
    assert.equal(r[0], testResults[0]);
    assert.equal(r[testResults.length - 1], testResults[testResults.length - 1]);
    called = 0;
  });

  s.before(function () {
    array = setup.randomIntArray(LEN);
    // parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lazyWrap = lazy(array.slice(0));
    testResults = array.filter(filterFn);
  });

  s.bench('for loop', function () {
    called = 0;

    r = [];
    var ri = -1;
    for (var i = 0, len = array.length; i < len; i++) {
      var value = array[i];
      if (filterFn(value)) {
        r[++ri] = value;
      }
    }
  });

  s.bench('while', function () {
    called = 0;

    var len = array.length;
    r = [];
    var ri = -1;
    var i = -1;

    while (++i < len) {
      var value = array[i];
      if (filterFn(value)) {
        r[++ri] = value;
      }
    }
  });

  s.bench('array.filter', function () {
    called = 0;
    r = array.filter(filterFn);
  });

  /* s.bench('powerArray.filter', function () {
    called = 0;
    r = parray.filter(filterFn);
  }); */

  s.bench('boostArray.$filter', function () {
    called = 0;
    r = barray.$filter(filterFn);
  });

  s.bench('fast.filter', function () {
    called = 0;
    r = fast.filter(array, filterFn);
  });

  s.bench('underscore.filter', function () {
    called = 0;
    r = underscore.filter(array, filterFn);
  });

  s.bench('lodash.filter', function () {
    called = 0;
    r = lodash.filter(array, filterFn);
  });

  s.bench('ramda.filter', function () {
    called = 0;
    r = ramda.filter(filterFn, array);
  });

  s.bench('lazyWrap.filter', function () {
    called = 0;
    r = lazyWrap.filter(filterFn).toArray();
  });
});
