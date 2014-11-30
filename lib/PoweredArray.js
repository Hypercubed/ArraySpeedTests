/* Add fast methods to Array prototype */

(function() {
  'use strict';

  var root = this;

  Array.prototype.$forEach = function (fn) {
    var i = -1, len = this.length;
    while (++i < len) {
      fn(this[i], i);
    }
  };

  Array.prototype.$reduce = function fastReduce (fn, acc) {
    var i = -1, len = this.length;
    while (++i < len) {
      acc = fn(acc, this[i], i);
    }
    return acc;
  };

  Array.prototype.$filter = function (fn) {
    var results = [];
    var i = -1, len = this.length;
    while (++i < len) {
      if (fn(this[i], i)) {
        results.push(this[i]);
      }
    }
    return results;
  };

}).call(this);
