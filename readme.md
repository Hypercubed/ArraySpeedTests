# Node (v0.10.26)

## filter
```
for loop x 2.70 ops/sec ±3.66% (11 runs sampled)
while x 2.54 ops/sec ±4.56% (11 runs sampled)
array.filter x 1.42 ops/sec ±6.94% (8 runs sampled)
array.$filter x 2.38 ops/sec ±8.09% (11 runs sampled)
powerArray.filter x 0.42 ops/sec ±2.46% (6 runs sampled)
boostArray.$filter x 2.40 ops/sec ±6.52% (11 runs sampled)
fast.filter x 2.30 ops/sec ±8.60% (10 runs sampled)
underscore.filter x 2.15 ops/sec ±6.24% (10 runs sampled)
lodash.filter x 2.29 ops/sec ±7.59% (10 runs sampled)
ramda.filter x 2.63 ops/sec ±7.84% (11 runs sampled)
Fastest is for loop,ramda.filter,array.$filter
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
for loop x 4.70 ops/sec ±16.88% (16 runs sampled)
while x 4.77 ops/sec ±11.08% (16 runs sampled)
array.filter x 1.27 ops/sec ±7.10% (8 runs sampled)
array.$filter x 4.82 ops/sec ±16.86% (17 runs sampled)
powerArray.filter x 0.52 ops/sec ±5.17% (6 runs sampled)
boostArray.$filter x 4.77 ops/sec ±16.70% (17 runs sampled)
fast.filter x 1.22 ops/sec ±6.13% (8 runs sampled)
underscore.filter x 2.15 ops/sec ±42.46% (9 runs sampled)
lodash.filter x 4.97 ops/sec ±16.84% (17 runs sampled)
ramda.filter x 1.27 ops/sec ±6.47% (8 runs sampled)
Fastest is while,lodash.filter,array.$filter,boostArray.$filter,for loop
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
