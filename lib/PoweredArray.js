/* Add fast methods to Arrya prototype */
'use strict';

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
}

Array.prototype.$filter = function (fn) {
  var results = [];
  var i = -1, len = this.length;
  while (++i < len) {
    if (fn(this[i], i)) {
      results[results.length] = this[i];
    }
  }
  return results;
}

module.exports = null;
