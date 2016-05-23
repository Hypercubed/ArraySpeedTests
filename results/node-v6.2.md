# Node.js 6.2.0 on Darwin 64-bit

## reduce

    fast.reduce x 840 ops/sec ±4.93% (23 runs sampled)
    boostArray.$reduce x 641 ops/sec ±4.14% (20 runs sampled)
    ramda.reduce x 609 ops/sec ±3.67% (21 runs sampled)
    while x 322 ops/sec ±2.24% (24 runs sampled)
    for loop x 324 ops/sec ±2.85% (23 runs sampled)
    underscore.reduce x 306 ops/sec ±3.54% (23 runs sampled)
    array.reduce x 263 ops/sec ±3.89% (24 runs sampled)
    lazyWrap.reduce x 110 ops/sec ±4.03% (21 runs sampled)
    powerArray.forEach x 76.68 ops/sec ±3.18% (21 runs sampled)
    lodash.reduce x 53.87 ops/sec ±3.35% (22 runs sampled)

*Fastest is __fast.reduce__*

## map

    for loop x 173 ops/sec ±7.52% (22 runs sampled)
    fast.map x 175 ops/sec ±8.76% (22 runs sampled)
    while x 168 ops/sec ±7.86% (22 runs sampled)
    ramda.map x 168 ops/sec ±7.87% (22 runs sampled)
    underscore.map x 160 ops/sec ±6.98% (23 runs sampled)
    boostArray.$map x 158 ops/sec ±8.25% (22 runs sampled)
    lodash.map x 124 ops/sec ±5.84% (22 runs sampled)
    lazyWrap.map x 24.90 ops/sec ±6.44% (17 runs sampled)
    array.map x 7.46 ops/sec ±3.84% (13 runs sampled)
    powerArray.map x 4.61 ops/sec ±2.62% (12 runs sampled)

*Fastest is __for loop,fast.map,while,ramda.map,boostArray.$map__*

## index-of

    array.indexOf x 9,711 ops/sec ±2.96% (23 runs sampled)
    boostArray.$indexOf x 4,057 ops/sec ±2.19% (26 runs sampled)
    while x 4,043 ops/sec ±2.26% (26 runs sampled)
    for loop x 4,021 ops/sec ±4.78% (25 runs sampled)
    ramda.indexOf x 3,811 ops/sec ±2.41% (26 runs sampled)
    lodash.indexOf x 3,708 ops/sec ±2.12% (25 runs sampled)
    underscore.indexOf x 3,576 ops/sec ±2.69% (23 runs sampled)
    powerArray.indexOf x 3,556 ops/sec ±2.63% (23 runs sampled)
    fast.indexOf x 3,542 ops/sec ±3.29% (25 runs sampled)
    lazyWrap.indexOf x 1,840 ops/sec ±1.77% (26 runs sampled)

*Fastest is __array.indexOf__*

## for-each

    underscore.forEach x 81.52 ops/sec ±3.32% (22 runs sampled)
    ramda.forEach x 80.22 ops/sec ±3.50% (22 runs sampled)
    fast.forEach x 80.79 ops/sec ±4.38% (21 runs sampled)
    boostArray.$forEach x 79.23 ops/sec ±2.90% (21 runs sampled)
    while x 78.42 ops/sec ±2.69% (21 runs sampled)
    lodash.forEach x 77.92 ops/sec ±2.66% (21 runs sampled)
    lazyWrap.each x 77.42 ops/sec ±4.34% (21 runs sampled)
    for loop x 75.69 ops/sec ±2.64% (21 runs sampled)
    powerArray.forEach x 75.09 ops/sec ±3.88% (20 runs sampled)
    array.forEach x 39.37 ops/sec ±3.82% (19 runs sampled)

*Fastest is __underscore.forEach,ramda.forEach,fast.forEach,boostArray.$forEach,lazyWrap.each__*

## filter

    ramda.filter x 60.49 ops/sec ±4.21% (20 runs sampled)
    fast.filter x 60.21 ops/sec ±3.93% (20 runs sampled)
    lodash.filter x 57.48 ops/sec ±4.97% (20 runs sampled)
    boostArray.$filter x 54.11 ops/sec ±4.58% (20 runs sampled)
    for loop x 50.87 ops/sec ±6.71% (18 runs sampled)
    while x 50.25 ops/sec ±6.09% (21 runs sampled)
    underscore.filter x 41.71 ops/sec ±3.85% (19 runs sampled)
    lazyWrap.filter x 35.30 ops/sec ±5.22% (18 runs sampled)
    array.filter x 10.80 ops/sec ±3.29% (15 runs sampled)

*Fastest is __ramda.filter,fast.filter,lodash.filter__*

## concat

    lodashWrap.concat x 129 ops/sec ±8.48% (21 runs sampled)
    array.concat x 128 ops/sec ±7.97% (21 runs sampled)
    underscoreWrap.concat x 126 ops/sec ±7.35% (22 runs sampled)
    boostArray.concat x 123 ops/sec ±6.56% (19 runs sampled)
    ramda.concat x 114 ops/sec ±8.29% (22 runs sampled)
    fast.concat x 26.14 ops/sec ±42.83% (17 runs sampled)
    lazyWrap.concat x 16.49 ops/sec ±7.41% (17 runs sampled)
    powerArray.concat x 3.06 ops/sec ±1.96% (11 runs sampled)

*Fastest is __lodashWrap.concat,array.concat,underscoreWrap.concat,boostArray.concat__*

