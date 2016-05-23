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

suite('map', function (s) {
  s.set('maxTime', 1);
  s.set('minSamples', 10);

  var LEN = 1e6;
  var array;
  var parray;
  var barray;
  var lazyWrap;

  function mapFn(i) {
    return i * 2;
  }

  s.before(function () {
    array = setup.randomIntArray(LEN);
    parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lazyWrap = lazy(array.slice(0));
  });

  var r;

  s.cycle(function () {
    assert.equal(r.length, LEN);
    assert.equal(r[0], 2 * array[0]);
    assert.equal(r[100], 2 * array[100]);
    assert.equal(r[LEN - 1], 2 * array[LEN - 1]);
    r = null;
  });

  s.bench('for loop', function () {
    var len = array.length;
    r = new Array(len);

    for (var i = 0; i < len; i++) {
      r[i] = mapFn(array[i]);
    }
  });

  s.bench('while', function () {
    var len = array.length;
    var i = -1;

    r = new Array(len);
    while (++i < len) {
      r[i] = mapFn(array[i]);
    }
  });

  s.bench('array.map', function () {
    r = array.map(mapFn);
  });

  s.bench('powerArray.map', function () {
    r = parray.map(mapFn);
  });

  s.bench('boostArray.$map', function () {
    r = barray.$map(mapFn);
  });

  s.bench('fast.map', function () {
    r = fast.map(array, mapFn);
  });

  s.bench('underscore.map', function () {
    r = underscore.map(array, mapFn);
  });

  s.bench('lodash.map', function () {
    r = lodash.map(array, mapFn);
  });

  s.bench('ramda.map', function () {
    r = ramda.map(mapFn, array);
  });

  s.bench('lazyWrap.map', function () {
    r = lazyWrap.map(mapFn).toArray();
  });
});
