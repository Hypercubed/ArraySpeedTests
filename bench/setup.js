(function() {

  var DEBUG = true;

  var root = (typeof global == 'object') ? global : this;
  var amd = root.define && define.amd;
  var load = (typeof require == 'function' && !amd) ? require : function () {};

  var R = load('ramda') || root.R;

  var progress = (typeof require !== 'function' || amd) ? function(s) { console.log(s); } : function (s) {
    process.stdout.write(s+'\033[0G');
  };

  var setup = function(suite) {

    return suite
      .on('start', function() {
        console.log('\n#',this.name);
      })
      .on('cycle', function(event) {
        if (!event.target.aborted) {
          console.log(String(event.target));
        }
      })
      .on('error', function(event) {
        console.log(String(event.target.name)+' '+String(event.target.error));
      })
      .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
      });

  };

  setup.randomIntArray = R.memoize(function randomIntArray(LEN) {
    var i,
    array = [];

    for (i=0; i < LEN; i++) {
      var rnd = Math.floor(Math.random() * 100 + 1);
      array.push(rnd);

      var p = i/LEN*100;
      if (DEBUG && p % 10 === 0) {
        progress('Generating large array: '+p+'% complete');
      }
    }
    progress('Generating large array: 100% complete\n');

    return array;
  });

  setup.assert = function assert(actual, expected, ctx) {
    //console.log(ctx.abort, ctx.error);
    if (actual !== expected) {
      var message = 'Expected '+actual+' to equal '+expected;
      var err = new Error(message);
      if (ctx && ctx.abort) {
        ctx.error = err;
        ctx.abort();
      } else {
        throw err;
      }
    }
  };

  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      module.exports = setup;
    }
  }
  else {
    root.arraySpeedTest = root.arraySpeedTest || {};
    root.arraySpeedTest.setup = setup;
  }

}).call(this);
