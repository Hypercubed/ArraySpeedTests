
# filter
```
for loop x 1.92 ops/sec ±6.18% (9 runs sampled)
while x 1.32 ops/sec ±6.50% (8 runs sampled)
array.filter x 1.02 ops/sec ±4.69% (7 runs sampled)
array.$filter x 1.57 ops/sec ±7.70% (8 runs sampled)
powerArray.filter x 0.32 ops/sec ±5.78% (5 runs sampled)
boostArray.$filter x 1.59 ops/sec ±8.71% (8 runs sampled)
fast.filter x 1.53 ops/sec ±10.30% (8 runs sampled)
underscore.filter x 1.48 ops/sec ±6.57% (8 runs sampled)
lodash.filter x 1.57 ops/sec ±8.29% (8 runs sampled)
ramda.filter x 1.62 ops/sec ±9.42% (9 runs sampled)
Fastest is for loop
```
# forEach
```
for loop x 63.91 ops/sec ±2.89% (68 runs sampled)
while x 54.22 ops/sec ±3.48% (58 runs sampled)
array.forEach x 2.09 ops/sec ±10.37% (10 runs sampled)
array.$forEach x 9.07 ops/sec ±1.61% (27 runs sampled)
powerArray.forEach x 8.07 ops/sec ±6.07% (25 runs sampled)
boostArray.$forEach x 9.24 ops/sec ±1.29% (28 runs sampled)
fast.forEach x 9.55 ops/sec ±1.72% (28 runs sampled)
underscore.forEach x 7.83 ops/sec ±3.78% (24 runs sampled)
lodash.forEach x 7.94 ops/sec ±4.61% (25 runs sampled)
ramda.forEach x 15.34 ops/sec ±1.30% (43 runs sampled)
Fastest is for loop
```
# reduce Sum
```
for loop x 49.38 ops/sec ±2.57% (66 runs sampled)
while x 39.23 ops/sec ±4.26% (54 runs sampled)
array.reduce x 2.14 ops/sec ±6.48% (10 runs sampled)
array.$reduce x 7.31 ops/sec ±7.49% (22 runs sampled)
powerArray.forEach x 7.14 ops/sec ±2.03% (22 runs sampled)
boostArray.$reduce x 7.56 ops/sec ±4.45% (23 runs sampled)
fast.reduce x 7.82 ops/sec ±5.05% (24 runs sampled)
underscore.reduce x 4.32 ops/sec ±8.28% (16 runs sampled)
lodash.reduce x 4.63 ops/sec ±8.33% (17 runs sampled)
ramda.reduce x 13.71 ops/sec ±0.87% (39 runs sampled)
Fastest is for loop
```
