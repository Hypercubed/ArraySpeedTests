/* "Boost" and array by adding fast methods
   boost an individual array by calling BoostArray(array)
   boost all arrays call call BoostArray(Array.prototype); */

(function() {
  'use strict';

  function BoostArray(array) {
    array = array || [];

    array.$forEach = function (fn) {
      var i = -1, len = this.length;
      while (++i < len) {
        fn(this[i]);
      }
    };

    array.$reduce = function (fn, acc) {
      var i = -1, len = this.length;
      while (++i < len) {
        acc = fn(acc, this[i]);
      }
      return acc;
    };

    array.$filter = function (fn) {
      var r = [], ri = -1;
      var i = -1, len = this.length;
      while (++i < len) {
        var value = this[i];
        if (fn(value)) {
          r[++ri] = value;
        }
      }
      return r;
    };

    array.$map = function (fn) {
      var i = -1, len = this.length, r = new Array(len);
      while (++i < len) {
        r[i] = fn(this[i]);
      }
      return r;
    };

    return array;

  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = BoostArray;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return BoostArray;
      });
    }
    else {
      this.BoostArray = BoostArray;
    }
  }

}).call(this);
