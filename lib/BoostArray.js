/* "Boost" and array by adding fast methods */
/* to boost all arrays call call BoostArray(Array.prototype); */

(function() {
  'use strict';

  function BoostArray(array) {
    array = array || [];

    array.$forEach = function (fn) {
      var i = -1, len = this.length;
      while (++i < len) {
        fn(this[i], i);
      }
    };

    array.$reduce = function (fn, acc) {
      var i = -1, len = this.length;
      while (++i < len) {
        acc = fn(acc, this[i], i);
      }
      return acc;
    };

    array.$filter = function (fn) {
      var results = [];
      var i = -1, len = this.length;
      while (++i < len) {
        if (fn(this[i], i)) {
          results.push(this[i]);
        }
      }
      return results;
    };

    array.$map = function (fn) {
      var results = [];
      var i = -1, len = this.length;
      while (++i < len) {
        results.push(fn(this[i], i));
      }
      return results;
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
