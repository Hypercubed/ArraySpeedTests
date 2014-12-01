
(function() {
  'use strict';

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var Benchmark = load('benchmark') || root.Benchmark;

  var setup = load('./setup.js')  || root.setup,
      assert = setup.assert;

  var PowerArray = load('PowerArray') || root.PowerArray,
    BoostArray = load('../lib/BoostArray') || root.BoostArray,
    fast = load('fast.js') || root.fast,
    underscore = load('underscore') || root._,
    lodash = load('lodash') || root.lodash,
    ramda = load('ramda') || root.R;

  BoostArray(Array.prototype);  // Boost the Array prototype

  var LEN = 1e7;
  var array = setup.randomIntArray(LEN);
  var parray = new PowerArray(array);
  //var iarray = new Uint16Array(array);
  var barray = BoostArray(array.slice(0));

  var mapFn = function (i) {
    return i * 2;
  };

  var testLength = array.map(mapFn).length;

  var suite = new Benchmark.Suite('map');

  suite

  .add('for loop', function() {

    var r = [];

    for (var i = 0, len = array.length; i < len; i++) {
      r.push(mapFn(array[i], i));
    }

    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);

  })

  .add('while', function() {

    var len = array.length,
        r = [],
        i = -1;

    while (++i < len) {
      r.push(mapFn(array[i], i));
    }

    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  })

  .add('array.map', function() {
    var r = array.map(mapFn);
    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  })

  /* .add('Array.prototype.filter on array', function() {
    var r = Array.prototype.filter.call(array,mapFn);
    assert(r.length, testLength);
  })

  .add('Array.prototype.filter on Uint16Array', function() {
  var r = Array.prototype.filter.call(iarray,mapFn);
  assert(r.length, testLength);
  })*/

  /* .add('Array.prototype.filter on PowerArray', function() {
  var r = Array.prototype.filter.call(parray, mapFn);
  assert(r.length, testLength);
  }) */

  .add('array.$map', function() {
    var r = array.$map(mapFn);
    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  })

  .add('powerArray.map', function() {
    var r = parray.map(mapFn);
    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  })

  .add('boostArray.$map', function() {
    var r = barray.$map(mapFn);
    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  })

  /* .add('PowerArray.prototype.filter on Uint16Array', function() {
  var r = PowerArray.prototype.filter.call(iarray, mapFn);
  assert(r.length, testLength);
  }) */

  .add('fast.map', function() {
    var r = fast.map(array,mapFn);
    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  })

  /* .add('fast.filter on Uint16Array', function() {  // fast.filter treats non-instanceof Arrays as objects
  var r = fastForEach(iarray,mapFn);
  assert(r.length, testLength);
  }) */

  /* .add('fast.filter on PowerArray', function() {
  var r = fast.filter(parray,mapFn);
  assert(r.length, testLength);
  }) */

  .add('underscore.map', function() {
    var r = underscore.map(array,mapFn);
    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  })

  /* .add('underscore.filter on Uint16Array', function() {
  var r = _.filter(iarray,mapFn);
  assert(r.length, testLength);
  }) */

  .add('lodash.map', function() {
    var r = lodash.map(array,mapFn);
    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  })

  .add('ramda.map', function() {
    var r = ramda.map(mapFn,array);
    assert(r.length, testLength);
    assert(r[0], 2*array[0]);
    assert(r[100], 2*array[100]);
  });

  /* .add('lodash.filter on Uint16Array', function() {
  var r = lodash.filter(iarray,mapFn);
  assert(r.length, testLength);
  }) */

  setup(suite).run();

}).call(this);
