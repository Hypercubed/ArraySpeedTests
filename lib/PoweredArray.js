/*
 * PowerArray
 * 5x faster array performance with built-in binarySearch
 * @author joe minichino <joe.minichino@gmail.com>
 * License: BSD
 */

'use strict';

/**
 * addAndSort inserts a value and sorts the array after insertion to keep binary search working
 * @param {number} val
 */
Array.prototype.$addhAndSort = function (val) {
  this.push(val);
  this.numericSort();
};

/**
 * forEach: improved version of the Array.prototype.forEach method, utilises for loop
 *
 * @param {function} processing function
 */
Array.prototype.$forEach = function (fun) {
  var i = 0,
    len = this.length;
  for (; i < len; i++) {
    fun(this[i], i);
  }
};

Array.prototype.$reduce = function fastReduce (fn, initialValue) {
  var i = 0, len = this.length,
      result = initialValue;

  for (; i < len; i++) {
    result = fn(result, this[i], i);
  }

  return result;
}


Array.prototype.$concat = function (arr) {
  var results = [];
  arr.forEach(function (elem) {
    results.push(elem);
  });
  return results;
};

/**
 * map: improved version of map
 * re-utilizing PowerArray.forEach did not make performance differences, so for-loop was used to maintain the 5x factor
 *
 * @param {function} mapping function
 * @returns {array} mapped array
 */
Array.prototype.$map = function (fun) {
  var results = [],
    i, len = this.length;
  for (i = 0; i < len; i += 1) {
    results.push(fun(this[i], i));
  }
  return results;
};

/**
 * filter: improved version of filter
 *
 * @param {function} filter function
 * @returns {array} filtered array
 */
Array.prototype.$filter = function (filterFun) {
  var results = [],
    i, len = this.length;
  for (i = 0; i < len; i++) {
    if (filterFun(this[i], i)) {
      results.push(this[i]);
    }
  }
  return results;
}

/**
 * contains: returns whether the array contains an element or not
 *
 * @param element
 * @returns {boolean} is the element contained or not
 */
Array.prototype.$contains = function (elem) {
  var i = 0,
    len = this.length,
    found = false;
  for (i; i < len; i += 1) {
    if (this[i] === elem) {
      found = true;
      break;
    }
  }
  return found;
};

/**
 * numericSort: sorts the array if the array is numerical
 *
 */
Array.prototype.$numericSort = function (fun) {
  this.sort(fun || function (a, b) {
    return a < b ? -1 : 1;
  });
};

/**
 * binarySearch performs a binary search on the sorted array
 *
 * @param {number} element to be found
 * @returns {number} index of element
 */
Array.prototype.$binarySearch = function (searchElement) {

  var minIndex = 0;
  var maxIndex = this.length - 1;
  var currentIndex;
  var currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = this[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
};

module.exports = null;
