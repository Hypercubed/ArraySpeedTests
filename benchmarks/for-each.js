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

suite('for-each', function (s) {
  s.set('maxTime', 1);
  s.set('minSamples', 10);

  var LEN = 1e6;

  var array;
  var parray;
  var barray;
  var lazyWrap;

  var called = 0;
  var dummy = false;

  function eachFn(i) {
    dummy = i * Math.floor(Math.random() * 100 + 1);
    called++;
  }

  s.before(function () {
    array = setup.randomIntArray(LEN);
    parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lazyWrap = lazy(array.slice(0));
  });

  s.cycle(function () {
    assert.equal(called, LEN);
    assert(dummy);
    array = setup.randomIntArray(LEN);
    parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lazyWrap = lazy(array.slice(0));
    called = 0;
    dummy = false;
  });

  s.bench('for loop', function () {
    called = 0;
    for (var i = 0, len = array.length; i < len; i++) {
      eachFn(array[i]);
    }
  });

  s.bench('while', function () {
    called = 0;
    var i = -1;
    var len = array.length;

    while (++i < len) {
      eachFn(array[i]);
    }
  });

  s.bench('array.forEach', function () {
    called = 0;
    array.forEach(eachFn);
  });

  s.bench('powerArray.forEach', function () {
    called = 0;
    parray.forEach(eachFn);
  });

  s.bench('boostArray.$forEach', function () {
    called = 0;
    barray.$forEach(eachFn);
  });

  s.bench('fast.forEach', function () {
    called = 0;
    fast.forEach(array, eachFn);
  });

  s.bench('underscore.forEach', function () {
    called = 0;
    underscore.forEach(array, eachFn);
  });

  s.bench('lodash.forEach', function () {
    called = 0;
    lodash.forEach(array, eachFn);
  });

  s.bench('ramda.forEach', function () {
    called = 0;
    ramda.forEach(eachFn, array);
  });

  s.bench('lazyWrap.each', function () {
    called = 0;
    lazyWrap.each(eachFn);
  });
});
