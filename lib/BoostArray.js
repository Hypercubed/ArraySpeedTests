/*
 * PowerArray
 * 5x faster array performance with built-in binarySearch
 * @author joe minichino <joe.minichino@gmail.com>
 * License: BSD
 */

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
        results[results.length] = array[i];
      }
    }
    return results;
  }

  return array;

}

module.exports = BoostArray;
