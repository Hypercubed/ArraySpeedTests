# Node (v0.10.26)

## filter
```
for loop x 2.79 ops/sec ±8.74% (11 runs sampled)
while x 2.89 ops/sec ±9.31% (11 runs sampled)
array.filter x 1.45 ops/sec ±5.80% (8 runs sampled)
array.$filter x 2.54 ops/sec ±6.84% (10 runs sampled)
powerArray.filter x 0.42 ops/sec ±1.51% (6 runs sampled)
boostArray.$filter x 2.56 ops/sec ±8.17% (11 runs sampled)
fast.filter x 2.33 ops/sec ±6.99% (10 runs sampled)
underscore.filter x 2.07 ops/sec ±7.54% (10 runs sampled)
lodash.filter x 2.36 ops/sec ±6.71% (10 runs sampled)
ramda.filter x 2.51 ops/sec ±9.49% (10 runs sampled)
Fastest is while,for loop,boostArray.$filter,ramda.filter
```

## forEach
```
for loop x 35.10 ops/sec ±3.31% (62 runs sampled)
while x 34.52 ops/sec ±3.74% (62 runs sampled)
array.forEach x 2.69 ops/sec ±4.01% (11 runs sampled)
array.$forEach x 14.84 ops/sec ±3.35% (42 runs sampled)
powerArray.forEach x 9.59 ops/sec ±1.22% (28 runs sampled)
boostArray.$forEach x 16.07 ops/sec ±2.40% (44 runs sampled)
fast.forEach x 9.54 ops/sec ±0.86% (28 runs sampled)
underscore.forEach x 9.38 ops/sec ±4.18% (28 runs sampled)
lodash.forEach x 9.60 ops/sec ±1.22% (28 runs sampled)
ramda.forEach x 15.58 ops/sec ±0.85% (43 runs sampled)
Fastest is for loop,while
```

## reduce (sum)
```
for loop x 73.39 ops/sec ±1.53% (77 runs sampled)
while x 55.26 ops/sec ±0.80% (73 runs sampled)
array.reduce x 3.08 ops/sec ±2.90% (12 runs sampled)
array.$reduce x 19.24 ops/sec ±1.98% (36 runs sampled)
powerArray.forEach x 7.77 ops/sec ±0.69% (24 runs sampled)
boostArray.$reduce x 20.13 ops/sec ±3.09% (38 runs sampled)
fast.reduce x 10.24 ops/sec ±1.06% (30 runs sampled)
underscore.reduce x 6.23 ops/sec ±1.32% (20 runs sampled)
lodash.reduce x 6.97 ops/sec ±4.17% (22 runs sampled)
ramda.reduce x 20.40 ops/sec ±1.37% (38 runs sampled)
Fastest is for loop
```

## map
```
for loop x 2.38 ops/sec ±6.01% (10 runs sampled)
while x 2.37 ops/sec ±4.85% (10 runs sampled)
array.map x 1.44 ops/sec ±3.04% (8 runs sampled)
array.$map x 2.20 ops/sec ±6.56% (10 runs sampled)
powerArray.map x 0.22 ops/sec ±0.49% (5 runs sampled)
boostArray.$map x 2.18 ops/sec ±5.62% (10 runs sampled)
fast.map x 2.01 ops/sec ±6.97% (9 runs sampled)
underscore.map x 1.99 ops/sec ±5.40% (9 runs sampled)
lodash.map x 1.94 ops/sec ±5.61% (9 runs sampled)
ramda.map x 2.22 ops/sec ±4.48% (10 runs sampled)
Fastest is while,for loop,ramda.map
```

# Browser (Chrome Version 39.0.2171.71 m)

## forEach
```
for loop x 11.32 ops/sec ±0.78% (33 runs sampled)
while x 10.86 ops/sec ±1.82% (32 runs sampled)
array.forEach x 1.67 ops/sec ±2.02% (9 runs sampled)
array.$forEach x 11.61 ops/sec ±1.52% (33 runs sampled)
powerArray.forEach x 11.25 ops/sec ±0.57% (33 runs sampled)
boostArray.$forEach x 11.25 ops/sec ±1.02% (32 runs sampled)
fast.forEach x 11.75 ops/sec ±0.84% (34 runs sampled)
underscore.forEach x 11.15 ops/sec ±2.18% (32 runs sampled)
lodash.forEach x 10.94 ops/sec ±0.93% (32 runs sampled)
ramda.forEach x 11.22 ops/sec ±1.98% (32 runs sampled)
Fastest is fast.forEach,array.$forEach
```

# filter
```
for loop x 1.28 ops/sec ±6.98% (8 runs sampled)
while x 1.24 ops/sec ±11.12% (8 runs sampled)
array.filter x 1.26 ops/sec ±4.57% (8 runs sampled)
array.$filter x 1.30 ops/sec ±6.58% (8 runs sampled)
powerArray.filter x 0.52 ops/sec ±5.50% (6 runs sampled)
boostArray.$filter x 1.23 ops/sec ±13.77% (8 runs sampled)
fast.filter x 1.25 ops/sec ±6.92% (7 runs sampled)
underscore.filter x 2.05 ops/sec ±45.23% (9 runs sampled)
lodash.filter x 4.64 ops/sec ±14.29% (16 runs sampled)
ramda.filter x 1.23 ops/sec ±20.96% (7 runs sampled)
Fastest is lodash.filter

```

# reduce (sum)
```
for loop x 42.38 ops/sec ±0.69% (57 runs sampled)
while x 40.60 ops/sec ±0.55% (55 runs sampled)
array.reduce x 1.96 ops/sec ±2.52% (9 runs sampled)
array.$reduce x 40.70 ops/sec ±0.76% (55 runs sampled)
powerArray.forEach x 8.11 ops/sec ±2.05% (25 runs sampled)
boostArray.$reduce x 40.44 ops/sec ±0.61% (55 runs sampled)
fast.reduce x 40.82 ops/sec ±0.51% (55 runs sampled)
underscore.reduce x 6.14 ops/sec ±3.84% (20 runs sampled)
lodash.reduce x 41.38 ops/sec ±0.74% (56 runs sampled)
ramda.reduce x 40.98 ops/sec ±0.42% (55 runs sampled)
Fastest is for loop
```

# map
```
for loop x 8.70 ops/sec ±8.76% (15 runs sampled)
while x 12.23 ops/sec ±22.45% (16 runs sampled)
array.map x 1.61 ops/sec ±5.03% (8 runs sampled)
array.$map x 12.70 ops/sec ±24.40% (16 runs sampled)
powerArray.map x 0.22 ops/sec ±0.62% (5 runs sampled)
boostArray.$map x 6.89 ops/sec ±25.44% (17 runs sampled)
fast.map x 8.96 ops/sec ±7.56% (15 runs sampled)
underscore.map x 11.45 ops/sec ±21.74% (16 runs sampled)
lodash.map x 12.19 ops/sec ±22.68% (16 runs sampled)
ramda.map x 12.08 ops/sec ±22.71% (16 runs sampled)
Fastest is array.$map,while,lodash.map,ramda.map
```
