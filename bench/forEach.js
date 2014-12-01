
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

  var counter = 0;
  function eachFn(i) {
    i * Math.floor(Math.random() * 100 + 1);
    counter++;
  };
  function check() {
    assert(counter,LEN,this);
  }

  var suite = new Benchmark.Suite('forEach');

  suite
    .add('for loop', function() {
        counter = 0;
        for (var i = 0, len = array.length; i < len; i++) {
          eachFn(array[i]);
        }
        check.call(this);
    })

    .add('while', function() {

      var i = -1,
          len = array.length;

      counter = 0;
      while (++i < len) {
        eachFn(array[i]);
      }
      check.call(this);

    })

    .add('array.forEach', function() {
      counter = 0;
      array.forEach(eachFn);
      check.call(this);
    })

    .add('array.$forEach', function() {
      counter = 0;
      array.$forEach(eachFn);
      check.call(this);
    })

    .add('powerArray.forEach', function() {
      counter = 0;
      parray.forEach(eachFn);
      check.call(this);
    })

    .add('boostArray.$forEach', function() {
      counter = 0;
      barray.$forEach(eachFn);
      check.call(this);
    })
    .add('fast.forEach', function() {
      counter = 0;
      fast.forEach(array,eachFn);
      check.call(this);
    })

    .add('underscore.forEach', function() {
      counter = 0;
      underscore.forEach(array,eachFn);
      check.call(this);
    })

    .add('lodash.forEach', function() {
      counter = 0;
      lodash.forEach(array,eachFn);
      check.call(this);
    })

    .add('ramda.forEach', function() {
      counter = 0;
      ramda.forEach(eachFn, array);
      check.call(this);
    });

  setup(suite).run();

}).call(this);
