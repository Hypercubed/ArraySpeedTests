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

suite('concat', function (s) {
  'use strict';
  s.set('maxTime', 1);
  s.set('minSamples', 10);

  var LEN = 1e6;
  var array;
  var array2;
  var parray;
  var barray;
  var lodashWrap;
  var underscoreWrap;
  var lazyWrap;
  var r0;
  var rM1;
  var rM2;
  var rE;

  var r = null;
  s.cycle(function () {
    assert.equal(r.length, 1.5 * LEN);
    assert.equal(r[0], r0);
    assert.equal(r[LEN - 1], rM1);
    assert.equal(r[LEN], rM2);
    assert.equal(r[1.5 * LEN - 1], rE);
  });

  s.before(function () {
    array = setup.randomIntArray(LEN);
    array2 = setup.randomIntArray(LEN / 2);
    parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lodashWrap = lodash(array);
    underscoreWrap = underscore(array);
    lazyWrap = lazy(array.slice(0));

    r0 = array[0];
    rM1 = array[LEN - 1];
    rM2 = array2[0];
    rE = array2[LEN / 2 - 1];
  });

  s.bench('array.concat', function () {
    r = array.concat(array2);
  });

  s.bench('powerArray.concat', function () {
    r = parray.concat(array2);
  });

  s.bench('boostArray.concat', function () {
    r = barray.concat(array2);  // Not boosted
  });

  s.bench('underscoreWrap.concat', function () {
    r = underscoreWrap.concat(array2);
  });

  s.bench('lodashWrap.concat', function () {
    r = lodashWrap.concat(array2).value();
  });

  s.bench('fast.concat', function () {
    r = fast.concat(array, array2);
  });

  s.bench('ramda.concat', function () {
    r = ramda.concat(array, array2);
  });

  s.bench('lazyWrap.concat', function () {
    r = lazyWrap.concat(array2).toArray();
  });
});
