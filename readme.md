# Node (v0.10.26)

# reduce
for loop x 72.11 ops/sec ±1.54% (76 runs sampled)
while x 59.55 ops/sec ±0.46% (64 runs sampled)
array.reduce x 3.01 ops/sec ±2.47% (12 runs sampled)
powerArray.forEach x 7.41 ops/sec ±2.23% (23 runs sampled)
boostArray.$reduce x 19.19 ops/sec ±3.34% (36 runs sampled)
fast.reduce x 9.12 ops/sec ±4.58% (28 runs sampled)
underscore.reduce x 6.28 ops/sec ±1.56% (20 runs sampled)
lodash.reduce x 6.88 ops/sec ±2.17% (22 runs sampled)
ramda.reduce x 19.77 ops/sec ±2.07% (38 runs sampled)
lazy_wrap.reduce x 6.26 ops/sec ±1.47% (20 runs sampled)
Fastest is for loop

# map
for loop x 2.20 ops/sec ±6.43% (10 runs sampled)
while x 2.18 ops/sec ±6.40% (10 runs sampled)
array.map x 1.34 ops/sec ±6.62% (8 runs sampled)
powerArray.map x 0.21 ops/sec ±1.88% (5 runs sampled)
boostArray.$map x 2.19 ops/sec ±6.00% (10 runs sampled)
fast.map x 1.95 ops/sec ±6.88% (9 runs sampled)
underscore.map x 1.89 ops/sec ±5.32% (9 runs sampled)
lodash.map x 1.92 ops/sec ±6.67% (9 runs sampled)
ramda.map x 2.11 ops/sec ±4.34% (10 runs sampled)
lazy_wrap.map x 1.44 ops/sec ±9.13% (8 runs sampled)
Fastest is for loop,boostArray.$map,while,ramda.map,fast.map

# indexOf
for loop x 40.74 ops/sec ±1.18% (55 runs sampled)
while x 38.02 ops/sec ±1.07% (67 runs sampled)
array.indexOf x 42.35 ops/sec ±1.87% (57 runs sampled)
powerArray.indexOf x 34.74 ops/sec ±5.92% (51 runs sampled)
boostArray.$indexOf x 42.93 ops/sec ±1.35% (58 runs sampled)
fast.indexOf x 42.99 ops/sec ±1.77% (58 runs sampled)
underscore.indexOf x 43.18 ops/sec ±1.37% (58 runs sampled)
lodash.indexOf x 43.63 ops/sec ±1.30% (59 runs sampled)
ramda.indexOf x 41.50 ops/sec ±2.00% (56 runs sampled)
lazy_wrap.indexOf x 23.47 ops/sec ±0.70% (43 runs sampled)
Fastest is lodash.indexOf

# forEach
for loop x 37.88 ops/sec ±0.60% (67 runs sampled)
while x 36.85 ops/sec ±1.42% (66 runs sampled)
array.forEach x 3.03 ops/sec ±1.51% (12 runs sampled)
powerArray.forEach x 9.14 ops/sec ±1.78% (27 runs sampled)
boostArray.$forEach x 16.80 ops/sec ±1.38% (46 runs sampled)
fast.forEach x 9.29 ops/sec ±0.68% (28 runs sampled)
underscore.forEach x 8.90 ops/sec ±2.95% (27 runs sampled)
lodash.forEach x 9.23 ops/sec ±1.83% (27 runs sampled)
ramda.forEach x 16.17 ops/sec ±0.67% (45 runs sampled)
lazy_wrap.each x 9.39 ops/sec ±2.35% (28 runs sampled)
Fastest is for loop

# filter
for loop x 2.96 ops/sec ±2.24% (12 runs sampled)
while x 2.32 ops/sec ±3.59% (11 runs sampled)
array.filter x 1.25 ops/sec ±3.70% (8 runs sampled)
powerArray.filter x 0.40 ops/sec ±4.02% (6 runs sampled)
boostArray.$filter x 2.11 ops/sec ±1.97% (10 runs sampled)
fast.filter x 1.97 ops/sec ±2.34% (10 runs sampled)
underscore.filter x 1.93 ops/sec ±10.29% (9 runs sampled)
lodash.filter x 1.99 ops/sec ±1.65% (10 runs sampled)
ramda.filter x 2.15 ops/sec ±1.08% (10 runs sampled)
lazy_wrap.filter x 1.79 ops/sec ±9.60% (9 runs sampled)
Fastest is for loop

# concat
array.concat x 3.93 ops/sec ±1.67% (17 runs sampled)
powerArray.concat x 0.13 ops/sec ±3.52% (5 runs sampled)
boostArray.concat x 5.02 ops/sec ±21.22% (17 runs sampled)
underscore_wrap.concat x 5.10 ops/sec ±21.94% (17 runs sampled)
lodash_wrap.concat x 5.36 ops/sec ±23.10% (17 runs sampled)
fast.concat x 1.61 ops/sec ±3.14% (8 runs sampled)
ramda.concat x 0.65 ops/sec ±0.89% (6 runs sampled)
lazy_wrap.concat x 1.21 ops/sec ±6.02% (7 runs sampled)
Fastest is lodash_wrap.concat,underscore_wrap.concat,boostArray.concat

# Browser (Chrome Version 39.0.2171.95 m)

# reduce
for loop x 40.40 ops/sec ±0.58% (55 runs sampled)
while x 40.90 ops/sec ±0.60% (55 runs sampled)
array.reduce x 1.96 ops/sec ±1.19% (9 runs sampled)
powerArray.forEach x 8.03 ops/sec ±1.98% (24 runs sampled)
boostArray.$reduce x 40.44 ops/sec ±0.85% (55 runs sampled)
fast.reduce x 40.64 ops/sec ±0.64% (55 runs sampled)
underscore.reduce x 6.28 ops/sec ±1.28% (20 runs sampled)
lodash.reduce x 40.65 ops/sec ±1.13% (55 runs sampled)
ramda.reduce x 39.65 ops/sec ±1.42% (54 runs sampled)
lazy_wrap.reduce x 12.62 ops/sec ±4.85% (36 runs sampled)
Fastest is while,fast.reduce,lodash.reduce,boostArray.$reduce

# map
for loop x 20.73 ops/sec ±22.25% (26 runs sampled)
while x 20.29 ops/sec ±31.03% (31 runs sampled)
array.map x 1.82 ops/sec ±5.46% (9 runs sampled)
powerArray.map x 0.24 ops/sec ±1.31% (5 runs sampled)
boostArray.$map x 22.36 ops/sec ±26.85% (32 runs sampled)
fast.map x 19.30 ops/sec ±22.38% (26 runs sampled)
underscore.map x 19.71 ops/sec ±26.30% (29 runs sampled)
lodash.map x 20.03 ops/sec ±29.16% (31 runs sampled)
ramda.map x 25.94 ops/sec ±13.84% (34 runs sampled)
lazy_wrap.map x 1.01 ops/sec ±50.47% (6 runs sampled)
Fastest is ramda.map,boostArray.$map,for loop,fast.map,lodash.map,while

# indexOf
for loop x 41.73 ops/sec ±2.32% (56 runs sampled)
while x 34.81 ops/sec ±1.45% (61 runs sampled)
array.indexOf x 35.14 ops/sec ±0.93% (62 runs sampled)
powerArray.indexOf x 31.20 ops/sec ±6.11% (55 runs sampled)
boostArray.$indexOf x 38.22 ops/sec ±2.96% (52 runs sampled)
fast.indexOf x 41.53 ops/sec ±2.49% (56 runs sampled)
underscore.indexOf x 39.22 ops/sec ±1.87% (53 runs sampled)
lodash.indexOf x 37.60 ops/sec ±2.01% (60 runs sampled)
ramda.indexOf x 42.66 ops/sec ±1.08% (57 runs sampled)
lazy_wrap.indexOf x 21.48 ops/sec ±2.38% (40 runs sampled)
Fastest is ramda.indexOf,for loop

# forEach
for loop x 0.81 ops/sec ±3.96% (7 runs sampled)
while x 0.80 ops/sec ±5.86% (7 runs sampled)
array.forEach x 0.58 ops/sec ±3.12% (6 runs sampled)
powerArray.forEach x 0.77 ops/sec ±5.19% (6 runs sampled)
boostArray.$forEach x 0.81 ops/sec ±5.68% (7 runs sampled)
fast.forEach x 0.82 ops/sec ±4.98% (7 runs sampled)
underscore.forEach x 0.82 ops/sec ±5.11% (7 runs sampled)
lodash.forEach x 0.82 ops/sec ±2.78% (7 runs sampled)
ramda.forEach x 0.79 ops/sec ±7.72% (6 runs sampled)
lazy_wrap.each x 0.77 ops/sec ±5.07% (6 runs sampled)
Fastest is lodash.forEach,underscore.forEach,fast.forEach,for loop,boostArray.$forEach,while,lazy_wrap.each,ramda.forEach

# filter
for loop x 4.80 ops/sec ±14.44% (16 runs sampled)
while x 5.05 ops/sec ±12.95% (16 runs sampled)
array.filter x 1.26 ops/sec ±5.14% (8 runs sampled)
powerArray.filter x 0.51 ops/sec ±3.17% (6 runs sampled)
boostArray.$filter x 4.82 ops/sec ±15.24% (16 runs sampled)
fast.filter x 1.20 ops/sec ±9.42% (8 runs sampled)
underscore.filter x 2.02 ops/sec ±58.31% (9 runs sampled)
lodash.filter x 4.78 ops/sec ±15.22% (16 runs sampled)
ramda.filter x 1.27 ops/sec ±9.64% (8 runs sampled)
lazy_wrap.filter x 2.10 ops/sec ±49.95% (8 runs sampled)
Fastest is while,for loop,boostArray.$filter,lodash.filter

# concat
array.concat x 11.60 ops/sec ±23.07% (18 runs sampled)
powerArray.concat x 0.14 ops/sec ±2.29% (5 runs sampled)
boostArray.concat x 11.71 ops/sec ±26.05% (18 runs sampled)
underscore_wrap.concat x 11.76 ops/sec ±24.11% (17 runs sampled)
lodash_wrap.concat x 11.71 ops/sec ±26.21% (19 runs sampled)
fast.concat x 0.44 ops/sec ±1.81% (6 runs sampled)
ramda.concat x 8.09 ops/sec ±35.10% (15 runs sampled)
lazy_wrap.concat x 0.41 ops/sec ±22.23% (6 runs sampled)
Fastest is underscore_wrap.concat,array.concat,boostArray.concat,lodash_wrap.concat,ramda.concat
