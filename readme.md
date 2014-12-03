# Node (v0.10.26)

## filter
```
for loop x 2.50 ops/sec ±5.18% (11 runs sampled)
while x 2.54 ops/sec ±6.38% (11 runs sampled)
array.filter x 1.35 ops/sec ±6.00% (8 runs sampled)
powerArray.filter x 0.40 ops/sec ±2.08% (6 runs sampled)
boostArray.$filter x 2.40 ops/sec ±7.93% (10 runs sampled)
fast.filter x 2.22 ops/sec ±8.11% (10 runs sampled)
underscore.filter x 1.86 ops/sec ±5.82% (9 runs sampled)
lodash.filter x 1.99 ops/sec ±14.57% (9 runs sampled)
ramda.filter x 2.27 ops/sec ±12.16% (10 runs sampled)
Fastest is while,for loop,boostArray.$filter,ramda.filter
```

## forEach
```
for loop x 33.56 ops/sec ±5.20% (60 runs sampled)
while x 34.54 ops/sec ±3.95% (62 runs sampled)
array.forEach x 2.93 ops/sec ±4.68% (12 runs sampled)
powerArray.forEach x 9.06 ops/sec ±2.03% (27 runs sampled)
boostArray.$forEach x 15.89 ops/sec ±4.55% (44 runs sampled)
fast.forEach x 8.82 ops/sec ±5.07% (27 runs sampled)
underscore.forEach x 8.09 ops/sec ±2.63% (24 runs sampled)
lodash.forEach x 8.87 ops/sec ±3.08% (26 runs sampled)
ramda.forEach x 15.62 ops/sec ±2.74% (44 runs sampled)
Fastest is while,for loop
```

## reduce
```
for loop x 71.74 ops/sec ±1.66% (76 runs sampled)
while x 56.77 ops/sec ±3.02% (61 runs sampled)
array.reduce x 2.97 ops/sec ±3.95% (12 runs sampled)
powerArray.forEach x 7.36 ops/sec ±3.33% (23 runs sampled)
boostArray.$reduce x 15.26 ops/sec ±8.94% (30 runs sampled)
fast.reduce x 7.92 ops/sec ±16.36% (24 runs sampled)
underscore.reduce x 6.27 ops/sec ±2.47% (20 runs sampled)
lodash.reduce x 6.72 ops/sec ±2.74% (21 runs sampled)
ramda.reduce x 18.27 ops/sec ±2.56% (39 runs sampled)
Fastest is for loop
```

## map
```
for loop x 2.29 ops/sec ±7.78% (9 runs sampled)
while x 2.40 ops/sec ±4.37% (10 runs sampled)
array.map x 1.39 ops/sec ±3.12% (7 runs sampled)
powerArray.map x 0.21 ops/sec ±1.43% (5 runs sampled)
boostArray.$map x 2.23 ops/sec ±9.41% (9 runs sampled)
fast.map x 2.14 ops/sec ±1.55% (9 runs sampled)
underscore.map x 2.04 ops/sec ±3.87% (9 runs sampled)
lodash.map x 2.00 ops/sec ±4.10% (9 runs sampled)
ramda.map x 2.34 ops/sec ±3.48% (9 runs sampled)
Fastest is while,ramda.map,for loop,boostArray.$map
```

## indexOf
```
for loop x 40.59 ops/sec ±1.47% (55 runs sampled)
while x 37.74 ops/sec ±1.50% (55 runs sampled)
array.indexOf x 41.31 ops/sec ±2.72% (56 runs sampled)
powerArray.indexOf x 39.46 ops/sec ±1.16% (54 runs sampled)
boostArray.$indexOf x 42.49 ops/sec ±2.70% (57 runs sampled)
fast.indexOf x 42.80 ops/sec ±2.05% (58 runs sampled)
underscore.indexOf x 42.43 ops/sec ±2.70% (57 runs sampled)
lodash.indexOf x 41.57 ops/sec ±2.34% (56 runs sampled)
ramda.indexOf x 41.58 ops/sec ±1.90% (56 runs sampled)
Fastest is fast.indexOf,boostArray.$indexOf,underscore.indexOf
```

# Browser (Chrome Version 39.0.2171.71 m)

## filter
```
for loop x 0.84 ops/sec ±9.13% (7 runs sampled)
while x 0.85 ops/sec ±9.72% (7 runs sampled)
array.filter x 0.55 ops/sec ±6.57% (6 runs sampled)
powerArray.filter x 0.35 ops/sec ±11.96% (5 runs sampled)
boostArray.$filter x 0.86 ops/sec ±10.33% (7 runs sampled)
fast.filter x 0.52 ops/sec ±14.74% (6 runs sampled)
underscore.filter x 1.46 ops/sec ±52.77% (7 runs sampled)
lodash.filter x 0.86 ops/sec ±7.54% (7 runs sampled)
ramda.filter x 0.57 ops/sec ±10.54% (6 runs sampled)
Fastest is underscore.filter
```

## forEach
```
for loop x 1.30 ops/sec ±4.51% (8 runs sampled)
while x 1.29 ops/sec ±3.32% (8 runs sampled)
array.forEach x 0.79 ops/sec ±7.05% (6 runs sampled)
powerArray.forEach x 1.30 ops/sec ±3.36% (8 runs sampled)
boostArray.$forEach x 1.09 ops/sec ±1.14% (7 runs sampled)
fast.forEach x 1.31 ops/sec ±5.76% (8 runs sampled)
underscore.forEach x 1.33 ops/sec ±1.09% (8 runs sampled)
lodash.forEach x 1.33 ops/sec ±5.44% (8 runs sampled)
ramda.forEach x 1.33 ops/sec ±2.97% (8 runs sampled)
Fastest is underscore.forEach,ramda.forEach,lodash.forEach,powerArray.forEach,fast.forEach
```

## reduce
```
for loop x 0.89 ops/sec ±19.73% (7 runs sampled)
while x 1.00 ops/sec ±1.80% (7 runs sampled)
array.reduce x 0.61 ops/sec ±0.83% (6 runs sampled)
powerArray.forEach x 0.83 ops/sec ±10.36% (6 runs sampled)
boostArray.$reduce x 1.20 ops/sec ±0.90% (7 runs sampled)
fast.reduce x 1.16 ops/sec ±2.65% (7 runs sampled)
underscore.reduce x 0.61 ops/sec ±3.26% (6 runs sampled)
lodash.reduce x 1.25 ops/sec ±4.52% (7 runs sampled)
ramda.reduce x 1.15 ops/sec ±6.25% (7 runs sampled)
Fastest is boostArray.$reduce,lodash.reduce
```

## map
```
for loop x 1.44 ops/sec ±5.80% (8 runs sampled)
while x 1.43 ops/sec ±6.79% (8 runs sampled)
array.map x 1.08 ops/sec ±17.93% (7 runs sampled)
powerArray.map x 0.19 ops/sec ±2.22% (5 runs sampled)
boostArray.$map x 1.46 ops/sec ±6.17% (8 runs sampled)
fast.map x 1.45 ops/sec ±3.91% (8 runs sampled)
underscore.map x 1.44 ops/sec ±7.06% (8 runs sampled)
lodash.map x 1.47 ops/sec ±4.14% (8 runs sampled)
ramda.map x 1.44 ops/sec ±6.61% (8 runs sampled)
Fastest is lodash.map,fast.map,boostArray.$map,for loop,ramda.map,underscore.map,while
```

## indexOf
```
for loop x 40.08 ops/sec ±3.11% (54 runs sampled)
while x 33.22 ops/sec ±4.20% (60 runs sampled)
array.indexOf x 32.85 ops/sec ±2.99% (58 runs sampled)
powerArray.indexOf x 32.53 ops/sec ±4.14% (59 runs sampled)
boostArray.$indexOf x 37.88 ops/sec ±2.65% (52 runs sampled)
fast.indexOf x 39.73 ops/sec ±2.42% (53 runs sampled)
underscore.indexOf x 38.30 ops/sec ±2.22% (51 runs sampled)
lodash.indexOf x 36.42 ops/sec ±2.18% (61 runs sampled)
ramda.indexOf x 41.58 ops/sec ±1.27% (56 runs sampled)
Fastest is ramda.indexOf,for loop
```
