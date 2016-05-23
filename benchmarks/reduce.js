const assert = require('assert');

const suite = require('chuhai');

const PowerArray = require('PowerArray');
const boostArray = require('BoostArray');
const fast = require('fast.js');
const underscore = require('underscore');
const lodash = require('lodash');
const ramda = require('ramda');
const lazy = require('lazy.js');

var setup = require('../scripts/setup.js');

suite('reduce', function (s) {
  s.set('maxTime', 1);
  s.set('minSamples', 10);

  var LEN = 1e6;
  var testSum;
  var array;
  var parray;
  var barray;
  var lazyWrap;

  function reduceFn(p, i) {
    return p + i;
  }

  var r = null;
  s.cycle(function () {
    assert.equal(r, testSum);
    r = null;
  });

  s.before(function () {
    array = setup.randomIntArray(LEN);
    parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lazyWrap = lazy(array);
    testSum = array.reduce(reduceFn, 0);
  });

  s.bench('for loop', function () {
    var i = 0;
    var len = array.length;

    r = 0;
    for (; i < len; i++) {
      r = reduceFn(r, array[i]);
    }
  });

  s.bench('while', function () {
    var i = -1;
    var len = array.length;

    r = 0;
    while (++i < len) {
      r = reduceFn(r, array[i]);
    }
  });

  s.bench('array.reduce', function () {
    r = array.reduce(reduceFn, 0);
  });

  s.bench('powerArray.forEach', function () {
    r = 0;
    parray.forEach(function (i) {
      r += i;
    });
  });

  s.bench('boostArray.$reduce', function () {
    r = barray.$reduce(reduceFn, 0);
  });

  s.bench('fast.reduce', function () {
    r = fast.reduce(array, reduceFn, 0);
  });

  s.bench('underscore.reduce', function () {
    r = underscore.reduce(array, reduceFn, 0);
  });

  s.bench('lodash.reduce', function () {
    r = lodash.reduce(array, reduceFn, 0);
  });

  s.bench('ramda.reduce', function () {
    r = ramda.reduce(reduceFn, 0, array);
  });

  s.bench('lazyWrap.reduce', function () {
    r = lazyWrap.reduce(reduceFn, 0);
  });
});
