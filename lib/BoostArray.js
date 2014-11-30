/* "Boost" and array by adding fast methods */

'use strict';

function BoostArray(array) {

  array.$forEach = function (fn) {
    var i = -1, len = this.length;
    while (++i < len) {
      fn(this[i], i);
    }
  }

  array.$reduce = function (fn, acc) {
    var i = -1, len = this.length;
    while (++i < len) {
      acc = fn(acc, this[i], i);
    }
    return acc;
  }

  array.$filter = function (fn) {
    var results = [];
    var i = -1, len = this.length;
    while (++i < len) {
      if (fn(this[i], i)) {
        results.push(this[i]);
      }
    }
    return results;
  }

  return array;

}

module.exports = BoostArray;
