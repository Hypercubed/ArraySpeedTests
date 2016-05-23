# Firefox 46.0 on OS X 10.11

## reduce

    boostArray.$reduce x 934 ops/sec ±2.61% (20 runs sampled)
    ramda.reduce x 906 ops/sec ±3.68% (21 runs sampled)
    fast.reduce x 861 ops/sec ±3.54% (19 runs sampled)
    array.reduce x 563 ops/sec ±2.08% (20 runs sampled)
    powerArray.forEach x 415 ops/sec ±2.38% (20 runs sampled)
    lazyWrap.reduce x 328 ops/sec ±2.66% (20 runs sampled)
    for loop x 329 ops/sec ±3.10% (20 runs sampled)
    while x 323 ops/sec ±2.86% (20 runs sampled)
    lodash.reduce x 316 ops/sec ±2.91% (20 runs sampled)
    underscore.reduce x 286 ops/sec ±2.01% (21 runs sampled)

*Fastest is __boostArray.$reduce,ramda.reduce__*

## map

    array.map x 122 ops/sec ±3.39% (19 runs sampled)
    boostArray.$map x 121 ops/sec ±3.27% (19 runs sampled)
    fast.map x 119 ops/sec ±2.80% (18 runs sampled)
    while x 119 ops/sec ±3.04% (19 runs sampled)
    ramda.map x 115 ops/sec ±3.74% (18 runs sampled)
    lodash.map x 107 ops/sec ±4.20% (18 runs sampled)
    underscore.map x 102 ops/sec ±3.82% (19 runs sampled)
    for loop x 99.21 ops/sec ±30.17% (19 runs sampled)
    lazyWrap.map x 67.90 ops/sec ±3.98% (19 runs sampled)
    powerArray.map x 6.62 ops/sec ±2.43% (13 runs sampled)

*Fastest is __array.map,boostArray.$map,fast.map,while__*

## index-of

    for loop x 17,042 ops/sec ±2.22% (21 runs sampled)
    array.indexOf x 16,982 ops/sec ±3.51% (21 runs sampled)
    boostArray.$indexOf x 14,785 ops/sec ±2.25% (20 runs sampled)
    while x 14,526 ops/sec ±7.70% (20 runs sampled)
    lodash.indexOf x 13,942 ops/sec ±4.99% (20 runs sampled)
    fast.indexOf x 9,046 ops/sec ±5.71% (19 runs sampled)
    lazyWrap.indexOf x 7,152 ops/sec ±16.09% (17 runs sampled)
    underscore.indexOf x 3,685 ops/sec ±1.59% (21 runs sampled)
    ramda.indexOf x 1,771 ops/sec ±17.37% (12 runs sampled)
    powerArray.indexOf x 1,085 ops/sec ±36.69% (18 runs sampled)

*Fastest is __for loop,array.indexOf__*

## for-each

    ramda.forEach x 48.27 ops/sec ±4.00% (17 runs sampled)
    boostArray.$forEach x 42.50 ops/sec ±4.69% (17 runs sampled)
    fast.forEach x 42.37 ops/sec ±6.78% (17 runs sampled)
    lazyWrap.each x 42.18 ops/sec ±8.50% (17 runs sampled)
    powerArray.forEach x 41.47 ops/sec ±7.54% (18 runs sampled)
    for loop x 40.26 ops/sec ±5.02% (17 runs sampled)
    while x 39.91 ops/sec ±6.29% (17 runs sampled)
    underscore.forEach x 39.44 ops/sec ±11.63% (18 runs sampled)
    lodash.forEach x 33.14 ops/sec ±7.03% (15 runs sampled)
    array.forEach x 20.85 ops/sec ±4.38% (16 runs sampled)

*Fastest is __ramda.forEach__*

## filter

    fast.filter x 20.67 ops/sec ±4.92% (16 runs sampled)
    ramda.filter x 20.25 ops/sec ±5.52% (16 runs sampled)
    array.filter x 20.14 ops/sec ±5.39% (16 runs sampled)
    boostArray.$filter x 19.67 ops/sec ±8.46% (16 runs sampled)
    while x 17.86 ops/sec ±4.18% (15 runs sampled)
    for loop x 16.98 ops/sec ±4.75% (15 runs sampled)
    lazyWrap.filter x 12.71 ops/sec ±3.79% (14 runs sampled)
    underscore.filter x 12.23 ops/sec ±7.95% (13 runs sampled)
    lodash.filter x 12.12 ops/sec ±7.34% (14 runs sampled)

*Fastest is __fast.filter,ramda.filter,array.filter,boostArray.$filter__*

## concat

    ramda.concat x 84.24 ops/sec ±5.57% (17 runs sampled)
    fast.concat x 47.72 ops/sec ±3.82% (16 runs sampled)
    lazyWrap.concat x 34.24 ops/sec ±11.11% (16 runs sampled)
    boostArray.concat x 29.36 ops/sec ±12.20% (16 runs sampled)
    underscoreWrap.concat x 27.33 ops/sec ±12.95% (16 runs sampled)
    array.concat x 25.93 ops/sec ±12.73% (16 runs sampled)
    lodashWrap.concat x 24.81 ops/sec ±20.64% (15 runs sampled)
    powerArray.concat x 3.74 ops/sec ±8.32% (11 runs sampled)

*Fastest is __ramda.concat__*
