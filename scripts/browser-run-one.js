var platform = require('platform');
console.log('# ' + platform.description);
console.log('');

require('../benchmarks/reduce.js');
require('../benchmarks/map.js');
require('../benchmarks/index-of.js');
require('../benchmarks/for-each.js');
require('../benchmarks/filter.js');
require('../benchmarks/concat.js');
