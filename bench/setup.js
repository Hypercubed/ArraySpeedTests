(function() {
  'use strict';

  var root = this;
  var DEBUG = true;

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var R = load('ramda') || root.R;

  var setup = {};

  setup.randomIntArray = R.memoize(function randomIntArray(LEN) {
    var i,
    array = [];

    for (i=0; i < LEN; i++) {
      var rnd = Math.floor(Math.random() * 100 + 1);
      array.push(rnd);

      var p = i/LEN*100;
      if (DEBUG && p % 10 === 0) {
        console.log(p+'% complete');
      }
    }

    return array;
  });

  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      module.exports = setup;
    }
  }
  else {
    root.setup = setup;
  }

}).call(this);
