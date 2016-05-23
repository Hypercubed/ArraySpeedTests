const R = require('ramda');

module.exports.randomIntArray = R.memoize(function randomIntArray(LEN) {
  var i;
  var array = [];

  for (i = 0; i < LEN; i++) {
    var rnd = Math.floor(Math.random() * 100 + 1);
    array.push(rnd);
  }

  return array;
});
