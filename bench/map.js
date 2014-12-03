
(function() {
  'use strict';

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var Benchmark = load('benchmark') || root.Benchmark;

  var setup = load('./setup.js')  || root.arraySpeedTest.setup,
      assert = setup.assert;

  var PowerArray = load('PowerArray') || root.PowerArray,
      boostArray = load('BoostArray') || root.BoostArray,
      fast = load('fast.js') || root.fast,
      underscore = load('underscore') || root._,
      lodash = load('lodash') || root.lodash,
      ramda = load('ramda') || root.R;

  var LEN = 1e7;
  var array, parray, barray;

  function mapFn(i) {
    return i * 2;
  }

  function check(test,r) {
    assert(r.length, LEN,test);
    assert(r[0], 2*array[0],test);
    assert(r[100], 2*array[100],test);
    assert(r[LEN-1], 2*array[LEN-1],test);
  }

  var suite = new Benchmark.Suite('map');

  setup(suite)
    .on('start', function() {
      array = setup.randomIntArray(LEN);
      parray = new PowerArray(array);
      barray = boostArray(array.slice(0));
    })
    .add('for loop', function() {

      var len = array.length,
          r = new Array(len);

      for (var i = 0; i < len; i++) {
        r[i] = mapFn(array[i]);
      }

      check(this,r);
    })

    .add('while', function() {

      var len = array.length,
          r = new Array(len),
          i = -1;

      while (++i < len) {
        r[i] = mapFn(array[i]);
      }

      check(this,r);
    })

    .add('array.map', function() {
      var r = array.map(mapFn);
      check(this,r);
    })

    .add('powerArray.map', function() {
      var r = parray.map(mapFn);
      check(this,r);
    })

    .add('boostArray.$map', function() {
      var r = barray.$map(mapFn);
      check(this,r);
    })

    .add('fast.map', function() {
      var r = fast.map(array,mapFn);
      check(this,r);
    })

    .add('underscore.map', function() {
      var r = underscore.map(array,mapFn);
      check(this,r);
    })

    .add('lodash.map', function() {
      var r = lodash.map(array,mapFn);
      check(this,r);
    })

    .add('ramda.map', function() {
      var r = ramda.map(mapFn,array);
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
