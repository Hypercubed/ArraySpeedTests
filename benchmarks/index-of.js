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

suite('index-of', function (s) {
  'use strict';
  s.set('maxTime', 1);
  s.set('minSamples', 10);

  var LEN = 1e6;
  var testIndex = 5e4;

  var array;
  var parray;
  var barray;
  var lazyWrap;

  var r = null;
  s.cycle(function () {
    assert.equal(r, testIndex);
  });

  s.before(function () {
    array = setup.randomIntArray(LEN);
    array[testIndex] = 'fizz';
    parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lazyWrap = lazy(array.slice(0));
  });

  s.bench('for loop', function () {
    var i = 0;
    var len = array.length;

    for (; i < len; i++) {
      if (array[i] === 'fizz') {
        break;
      }
    }
    r = i;
  });

  s.bench('while', function () {
    var i = -1;
    var len = array.length;

    while (++i < len) {
      if (array[i] === 'fizz') {
        break;
      }
    }
    r = i;
  });

  s.bench('array.indexOf', function () {
    r = array.indexOf('fizz');
  });

  s.bench('powerArray.indexOf', function () {
    r = parray.indexOf('fizz');
  });

  s.bench('boostArray.$indexOf', function () {
    r = barray.$indexOf('fizz');
  });

  s.bench('fast.indexOf', function () {
    r = fast.indexOf(array, 'fizz');
  });

  s.bench('underscore.indexOf', function () {
    r = underscore.indexOf(array, 'fizz');
  });

  s.bench('lodash.indexOf', function () {
    r = lodash.indexOf(array, 'fizz');
  });

  s.bench('ramda.indexOf', function () {
    r = ramda.indexOf('fizz', array);
  });

  s.bench('lazyWrap.indexOf', function () {
    r = lazyWrap.indexOf('fizz');
  });
});
