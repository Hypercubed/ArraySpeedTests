
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
  var barray = BoostArray(array.slice(0));

  function mapFn(i) {
    return i * 2;
  };
  function check(r) {
    assert(r.length, LEN,this);
    assert(r[0], 2*array[0],this);
    assert(r[100], 2*array[100],this);
    assert(r[LEN-1], 2*array[LEN-1],this);
  }

  var suite = new Benchmark.Suite('map');

  suite
    .add('for loop', function() {

      var len = array.length,
          r = new Array(len);

      for (var i = 0; i < len; i++) {
        r[i] = mapFn(array[i]);
      }

      check.call(this,r);
    })

    .add('while', function() {

      var len = array.length,
          r = new Array(len),
          i = -1;

      while (++i < len) {
        r[i] = mapFn(array[i]);
      }

      check.call(this,r);
    })

    .add('array.map', function() {
      var r = array.map(mapFn);
      check.call(this,r);
    })

    .add('array.$map', function() {
      var r = array.$map(mapFn);
      check.call(this,r);
    })

    .add('powerArray.map', function() {
      var r = parray.map(mapFn);
      check.call(this,r);
    })

    .add('boostArray.$map', function() {
      var r = barray.$map(mapFn);
      check.call(this,r);
    })

    .add('fast.map', function() {
      var r = fast.map(array,mapFn);
      check.call(this,r);
    })

    .add('underscore.map', function() {
      var r = underscore.map(array,mapFn);
      check.call(this,r);
    })

    .add('lodash.map', function() {
      var r = lodash.map(array,mapFn);
      check.call(this,r);
    })

    .add('ramda.map', function() {
      var r = ramda.map(mapFn,array);
      check.call(this,r);
    });

  setup(suite).run();

}).call(this);
