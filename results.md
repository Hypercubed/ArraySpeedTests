
# filter
```
for loop x 2.07 ops/sec ±5.20% (10 runs sampled)
array.filter x 1.10 ops/sec ±5.98% (7 runs sampled)
array.$filter x 1.74 ops/sec ±6.79% (9 runs sampled)
powerArray.filter x 0.36 ops/sec ±2.85% (5 runs sampled)
boostArray.$filter x 1.71 ops/sec ±6.84% (9 runs sampled)
fast.filter x 1.74 ops/sec ±6.30% (9 runs sampled)
underscore.filter x 1.62 ops/sec ±6.32% (8 runs sampled)
lodash.filter x 1.73 ops/sec ±6.09% (9 runs sampled)
ramda.filter x 1.93 ops/sec ±8.53% (9 runs sampled)
Fastest is for loop,ramda.filter
```
# forEach
```
for loop x 75.07 ops/sec ±0.87% (84 runs sampled)
array.forEach x 2.49 ops/sec ±2.45% (11 runs sampled)
array.$forEach x 10.30 ops/sec ±1.51% (31 runs sampled)
powerArray.forEach x 9.79 ops/sec ±1.46% (30 runs sampled)
boostArray.$forEach x 9.89 ops/sec ±1.75% (30 runs sampled)
fast.forEach x 10.38 ops/sec ±1.54% (31 runs sampled)
underscore.forEach x 10.31 ops/sec ±1.83% (31 runs sampled)
lodash.forEach x 9.16 ops/sec ±1.32% (28 runs sampled)
ramda.forEach x 16.48 ops/sec ±1.75% (48 runs sampled)
Fastest is for loop
```
# reduce Sum
```
for loop x 58.79 ops/sec ±1.09% (63 runs sampled)
array.reduce x 2.48 ops/sec ±1.25% (11 runs sampled)
array.$reduce x 8.72 ops/sec ±1.83% (26 runs sampled)
powerArray.forEach x 6.89 ops/sec ±3.65% (21 runs sampled)
boostArray.$reduce x 7.83 ops/sec ±2.19% (24 runs sampled)
fast.reduce x 8.37 ops/sec ±1.90% (25 runs sampled)
underscore.reduce x 4.76 ops/sec ±1.67% (16 runs sampled)
lodash.reduce x 5.16 ops/sec ±2.11% (18 runs sampled)
ramda.reduce x 14.75 ops/sec ±1.56% (41 runs sampled)
Fastest is for loop
```
