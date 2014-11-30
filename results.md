# Node

## filter
```
for loop x 1.16 ops/sec ±7.80% (7 runs sampled)
while x 0.73 ops/sec ±10.82% (6 runs sampled)
array.filter x 0.54 ops/sec ±11.77% (6 runs sampled)
array.$filter x 0.97 ops/sec ±17.58% (7 runs sampled)
powerArray.filter x 0.18 ops/sec ±10.66% (5 runs sampled)
boostArray.$filter x 0.88 ops/sec ±13.89% (6 runs sampled)
fast.filter x 0.98 ops/sec ±14.31% (7 runs sampled)
underscore.filter x 0.87 ops/sec ±8.56% (7 runs sampled)
lodash.filter x 0.96 ops/sec ±6.03% (7 runs sampled)
ramda.filter x 1.01 ops/sec ±14.82% (7 runs sampled)
Fastest is for loop,ramda.filter,array.$filter
```

## forEach
```
for loop x 26.78 ops/sec ±7.17% (49 runs sampled)
while x 22.95 ops/sec ±8.90% (44 runs sampled)
array.forEach x 1.13 ops/sec ±11.66% (7 runs sampled)
array.$forEach x 3.99 ops/sec ±8.22% (15 runs sampled)
powerArray.forEach x 4.06 ops/sec ±12.99% (15 runs sampled)
boostArray.$forEach x 4.40 ops/sec ±15.38% (15 runs sampled)
fast.forEach x 4.20 ops/sec ±14.06% (15 runs sampled)
underscore.forEach x 3.95 ops/sec ±11.14% (14 runs sampled)
lodash.forEach x 4.16 ops/sec ±9.89% (15 runs sampled)
ramda.forEach x 7.17 ops/sec ±11.99% (23 runs sampled)
Fastest is for loop
```

## reduce Sum
```
for loop x 21.98 ops/sec ±9.24% (41 runs sampled)
while x 18.26 ops/sec ±8.34% (35 runs sampled)
array.reduce x 1.05 ops/sec ±12.44% (7 runs sampled)
array.$reduce x 4.34 ops/sec ±11.77% (14 runs sampled)
powerArray.forEach x 3.27 ops/sec ±9.29% (13 runs sampled)
boostArray.$reduce x 3.74 ops/sec ±16.25% (14 runs sampled)
fast.reduce x 3.94 ops/sec ±13.21% (15 runs sampled)
underscore.reduce x 2.11 ops/sec ±14.74% (10 runs sampled)
lodash.reduce x 2.29 ops/sec ±14.13% (11 runs sampled)
ramda.reduce x 7.39 ops/sec ±11.23% (23 runs sampled)
Fastest is for loop
```

# Browser

## forEach
```
for loop x 1.06 ops/sec ±0.45% (7 runs sampled)
while x 1.05 ops/sec ±1.09% (7 runs sampled)
array.forEach x 0.51 ops/sec ±1.64% (6 runs sampled)
array.$forEach x 1.06 ops/sec ±0.59% (7 runs sampled)
powerArray.forEach x 1.03 ops/sec ±3.90% (7 runs sampled)
boostArray.$forEach x 1.06 ops/sec ±1.02% (7 runs sampled)
fast.forEach x 1.06 ops/sec ±0.56% (7 runs sampled)
underscore.forEach x 1.05 ops/sec ±5.92% (7 runs sampled)
lodash.forEach x 1.06 ops/sec ±1.17% (7 runs sampled)
ramda.forEach x 1.00 ops/sec ±7.87% (7 runs sampled)
Fastest is array.$forEach,fast.forEach,for loop,lodash.forEach,boostArray.$forEach,while,underscore.forEach,ramda.forEach
```

## filter
```
for loop x 0.58 ops/sec ±11.66% (6 runs sampled)
while x 0.71 ops/sec ±9.48% (6 runs sampled)
array.filter x 0.60 ops/sec ±4.54% (6 runs sampled)
array.$filter x 0.60 ops/sec ±7.58% (6 runs sampled)
powerArray.filter x 0.24 ops/sec ±10.11% (5 runs sampled)
boostArray.$filter x 0.61 ops/sec ±10.12% (6 runs sampled)
fast.filter x 0.58 ops/sec ±8.90% (6 runs sampled)
underscore.filter x 1.07 ops/sec ±53.05% (7 runs sampled)
lodash.filter x 2.38 ops/sec ±20.33% (11 runs sampled)
ramda.filter x 0.60 ops/sec ±8.40% (6 runs sampled)
Fastest is lodash.filter
```

## reduce Sum
```
for loop x 22.11 ops/sec ±1.81% (41 runs sampled)
while x 22.29 ops/sec ±1.05% (41 runs sampled)
array.reduce x 0.95 ops/sec ±0.90% (7 runs sampled)
array.$reduce x 22.76 ops/sec ±1.21% (42 runs sampled)
powerArray.forEach x 4.06 ops/sec ±5.14% (14 runs sampled)
boostArray.$reduce x 21.76 ops/sec ±5.91% (41 runs sampled)
fast.reduce x 23.20 ops/sec ±0.96% (43 runs sampled)
underscore.reduce x 2.79 ops/sec ±1.68% (11 runs sampled)
lodash.reduce x 22.53 ops/sec ±1.13% (42 runs sampled)
ramda.reduce x 22.17 ops/sec ±0.70% (41 runs sampled)
Fastest is fast.reduce
```
