/* "Boost" an array by adding fast methods
   boost an individual array by calling BoostArray(array)
   boost all arrays by calling BoostArray(Array.prototype); */

(function () {
  'use strict';

  function $forEach(fn) {
    var i = -1,
      len = this.length;
    while (++i < len) {
      fn(this[i]);
    }
  }

  function $reduce(fn, acc) {
    var i = -1,
      len = this.length;
    while (++i < len) {
      acc = fn(acc, this[i]);
    }
    return acc;
  }

  function $filter(fn) {
    var r = [],
      ri = -1;
    var i = -1,
      len = this.length;
    while (++i < len) {
      var value = this[i];
      if (fn(value)) {
        r[++ri] = value;
      }
    }
    return r;
  }

  function $map(fn) {
    var i = -1,
      len = this.length,
      r = new Array(len);
    while (++i < len) {
      r[i] = fn(this[i]);
    }
    return r;
  }

  function BoostArray(array) {
    array = array || [];
    array.$forEach = $forEach.bind(array);
    array.$reduce = $reduce.bind(array);
    array.$filter = $filter.bind(array);
    array.$map = $map.bind(array);
    return array;
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = BoostArray;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return BoostArray;
      });
    } else {
      this.BoostArray = BoostArray;
    }
  }

}).call(this);