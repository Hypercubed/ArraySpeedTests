# Node

## filter
```
for loop x 2.57 ops/sec ±4.06% (11 runs sampled)
while x 1.76 ops/sec ±14.23% (9 runs sampled)
array.filter x 1.37 ops/sec ±2.64% (8 runs sampled)
array.$filter x 2.32 ops/sec ±6.45% (10 runs sampled)
powerArray.filter x 0.41 ops/sec ±1.29% (6 runs sampled)
boostArray.$filter x 2.08 ops/sec ±12.69% (9 runs sampled)
fast.filter x 2.09 ops/sec ±14.39% (10 runs sampled)
underscore.filter x 1.77 ops/sec ±17.07% (9 runs sampled)
lodash.filter x 2.14 ops/sec ±9.62% (10 runs sampled)
ramda.filter x 2.60 ops/sec ±7.60% (11 runs sampled)
Fastest is for loop,ramda.filter
```

## forEach
```
for loop x 37.39 ops/sec ±2.31% (62 runs sampled)
while x 36.91 ops/sec ±3.05% (65 runs sampled)
array.forEach x 2.95 ops/sec ±2.51% (12 runs sampled)
array.$forEach x 9.46 ops/sec ±1.96% (28 runs sampled)
powerArray.forEach x 9.16 ops/sec ±4.35% (27 runs sampled)
boostArray.$forEach x 8.80 ops/sec ±4.08% (27 runs sampled)
fast.forEach x 8.77 ops/sec ±4.53% (26 runs sampled)
underscore.forEach x 8.37 ops/sec ±2.59% (25 runs sampled)
lodash.forEach x 8.59 ops/sec ±4.95% (26 runs sampled)
ramda.forEach x 14.96 ops/sec ±3.32% (42 runs sampled)
Fastest is for loop,while
```

## reduce (sum)
```
for loop x 74.09 ops/sec ±1.83% (78 runs sampled)
while x 60.32 ops/sec ±1.54% (64 runs sampled)
array.reduce x 2.72 ops/sec ±10.52% (11 runs sampled)
array.$reduce x 5.62 ops/sec ±17.79% (18 runs sampled)
powerArray.forEach x 7.34 ops/sec ±2.89% (23 runs sampled)
boostArray.$reduce x 8.40 ops/sec ±12.54% (25 runs sampled)
fast.reduce x 7.28 ops/sec ±8.69% (22 runs sampled)
underscore.reduce x 4.22 ops/sec ±9.23% (16 runs sampled)
lodash.reduce x 3.53 ops/sec ±19.25% (13 runs sampled)
ramda.reduce x 14.53 ops/sec ±8.10% (42 runs sampled)
Fastest is for loop
```

## map
```
for loop x 2.04 ops/sec ±6.56% (9 runs sampled)
while x 1.98 ops/sec ±4.36% (9 runs sampled)
array.map x 1.38 ops/sec ±2.74% (8 runs sampled)
array.$map x 1.83 ops/sec ±2.81% (9 runs sampled)
powerArray.map x 0.21 ops/sec ±2.26% (5 runs sampled)
boostArray.$map x 1.84 ops/sec ±2.99% (9 runs sampled)
fast.map x 2.25 ops/sec ±1.01% (9 runs sampled)
underscore.map x 1.94 ops/sec ±12.98% (9 runs sampled)
lodash.map x 2.05 ops/sec ±7.68% (9 runs sampled)
ramda.map x 2.37 ops/sec ±3.33% (10 runs sampled)
Fastest is ramda.map
```

# Browser

## forEach
```
for loop x 2.12 ops/sec ±0.62% (10 runs sampled)
while x 2.07 ops/sec ±2.91% (10 runs sampled)
array.forEach x 1.07 ops/sec ±2.45% (7 runs sampled)
array.$forEach x 2.15 ops/sec ±1.38% (10 runs sampled)
powerArray.forEach x 2.10 ops/sec ±1.47% (10 runs sampled)
boostArray.$forEach x 2.08 ops/sec ±4.34% (10 runs sampled)
fast.forEach x 2.16 ops/sec ±2.08% (10 runs sampled)
underscore.forEach x 2.18 ops/sec ±2.42% (10 runs sampled)
lodash.forEach x 2.07 ops/sec ±3.77% (10 runs sampled)
ramda.forEach x 2.12 ops/sec ±2.08% (10 runs sampled)
Fastest is underscore.forEach,array.$forEach,fast.forEach
```

# filter
```
for loop x 1.36 ops/sec ±6.54% (8 runs sampled)
while x 1.32 ops/sec ±11.49% (8 runs sampled)
array.filter x 1.18 ops/sec ±10.44% (8 runs sampled)
array.$filter x 1.41 ops/sec ±5.64% (8 runs sampled)
powerArray.filter x 0.49 ops/sec ±8.69% (6 runs sampled)
boostArray.$filter x 1.32 ops/sec ±8.25% (8 runs sampled)
fast.filter x 1.30 ops/sec ±11.74% (8 runs sampled)
underscore.filter x 2.09 ops/sec ±33.29% (9 runs sampled)
lodash.filter x 4.22 ops/sec ±21.00% (16 runs sampled)
ramda.filter x 1.39 ops/sec ±10.32% (8 runs sampled)
Fastest is lodash.filter
```

# reduce (sum)
```
for loop x 40.57 ops/sec ±0.53% (55 runs sampled)
while x 40.74 ops/sec ±0.76% (55 runs sampled)
array.reduce x 1.95 ops/sec ±4.62% (9 runs sampled)
array.$reduce x 40.80 ops/sec ±0.98% (55 runs sampled)
powerArray.forEach x 7.97 ops/sec ±2.98% (24 runs sampled)
boostArray.$reduce x 41.06 ops/sec ±1.00% (55 runs sampled)
fast.reduce x 40.90 ops/sec ±0.60% (55 runs sampled)
underscore.reduce x 6.28 ops/sec ±0.88% (20 runs sampled)
lodash.reduce x 41.49 ops/sec ±0.50% (56 runs sampled)
ramda.reduce x 40.38 ops/sec ±0.77% (54 runs sampled)
Fastest is lodash.reduce,boostArray.$reduce
```

# map
```
for loop x 0.54 ops/sec ±2.94% (6 runs sampled)
while x 0.55 ops/sec ±1.19% (6 runs sampled)
array.map x 1.74 ops/sec ±10.61% (8 runs sampled)
array.$map x 0.56 ops/sec ±0.60% (6 runs sampled)
powerArray.map x 0.23 ops/sec ±6.50% (5 runs sampled)
boostArray.$map x 0.54 ops/sec ±2.87% (6 runs sampled)
fast.map x 7.81 ops/sec ±36.81% (12 runs sampled)
underscore.map x 4.84 ops/sec ±34.38% (13 runs sampled)
lodash.map x 5.34 ops/sec ±33.12% (14 runs sampled)
ramda.map x 5.25 ops/sec ±33.68% (14 runs sampled)
Fastest is fast.map,lodash.map,ramda.map,underscore.map
```
