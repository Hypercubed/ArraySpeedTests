/* "Boost" and array by adding fast methods */

(function() {
  'use strict';

  var root = this;

  function BoostArray(array) {

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
      root.BoostArray = BoostArray;
    }
  }

}).call(this);
