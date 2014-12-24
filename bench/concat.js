
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
      ramda = load('ramda') || root.R,
      Lazy = load('lazy.js') || root.Lazy;

  var LEN = 1e7;
  var array, array2, parray, barray, lodash_wrap, underscore_wrap, lazy_wrap;
  var r0,rM1,rM2, rE;

  function check(test,r) {
    assert(r.length, 1.5*LEN,test);
    assert(r[0], r0,test);
    assert(r[LEN-1], rM1,test);
    assert(r[LEN], rM2,test);
    assert(r[1.5*LEN-1], rE,test);
  }

  function before() {
    array = setup.randomIntArray(LEN);
    array2 = setup.randomIntArray(LEN/2);
    parray = new PowerArray(array);
    barray = boostArray(array.slice(0));
    lodash_wrap = lodash(array);
    underscore_wrap = underscore(array);
    lazy_wrap = Lazy(array.slice(0));

    r0 = array[0];
    rM1 = array[LEN-1];
    rM2 = array2[0];
    rE = array2[LEN/2-1];

  }

  var suite = new Benchmark.Suite('concat');

  setup(suite)
    .on('start', before)

    .add('array.concat', function() {
      var r = array.concat(array2);
      check(this,r);
    })



    /* .add('for loop', function() {

      var i = 0,
          len1 = array.length,
          len2 = array2.length,
          r = new Array(len1+len2);

      for (; i < len1; i++) {
        r[i] = array[i];
      }
      for (i = 0; i < len2; i++) {
        r[len1 + i] = array2[i];
      }

      check(this,r);
    })

    .add('while', function() {

      var i,
          len1 = array.length,
          len2 = array2.length,
          r = new Array(len1+len2);

      i = -1;
      while (++i < len1) {
        r[i] = array[i];
      }

      i = -1;
      while (++i < len2) {
        r[len1 + i] = array2[i];
      }

      check(this,r);
    }) */

    .add('powerArray.concat', function() {
      var r = parray.concat(array2);
      check(this,r);
    })

    .add('boostArray.concat', function() {
      var r = barray.concat(array2);  // Not boosted
      check(this,r);
    })

    .add('underscore_wrap.concat', function() {
      var r = underscore_wrap.concat(array2);
      check(this,r);
    })

    .add('lodash_wrap.concat', function() {
      var r = lodash_wrap.concat(array2).value();
      check(this,r);
    })

    .add('fast.concat', function() {
      var r = fast.concat(array,array2);
      check(this,r);
    })

    .add('ramda.concat', function() {
      var r = ramda.concat(array,array2);
      check(this,r);
    })

    .add('lazy_wrap.concat', function() {
      var r = lazy_wrap.concat(array2).toArray();
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
