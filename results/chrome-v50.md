# Chrome 50.0.2661.102 on OS X 10.11.2

## reduce

    fast.reduce x 875 ops/sec ±3.98% (21 runs sampled)
    boostArray.$reduce x 654 ops/sec ±2.56% (20 runs sampled)
    ramda.reduce x 652 ops/sec ±4.13% (18 runs sampled)
    for loop x 317 ops/sec ±5.28% (20 runs sampled)
    while x 307 ops/sec ±3.57% (20 runs sampled)
    underscore.reduce x 302 ops/sec ±2.66% (17 runs sampled)
    array.reduce x 283 ops/sec ±3.46% (19 runs sampled)
    lazyWrap.reduce x 110 ops/sec ±2.52% (19 runs sampled)
    powerArray.forEach x 76.50 ops/sec ±2.98% (18 runs sampled)
    lodash.reduce x 52.33 ops/sec ±2.56% (18 runs sampled)

*Fastest is __fast.reduce__*

## map

    fast.map x 157 ops/sec ±8.11% (18 runs sampled)
    boostArray.$map x 153 ops/sec ±8.01% (19 runs sampled)
    for loop x 152 ops/sec ±8.08% (18 runs sampled)
    while x 152 ops/sec ±9.28% (19 runs sampled)
    ramda.map x 150 ops/sec ±8.62% (18 runs sampled)
    underscore.map x 147 ops/sec ±6.97% (19 runs sampled)
    lodash.map x 110 ops/sec ±5.83% (19 runs sampled)
    lazyWrap.map x 19.32 ops/sec ±6.74% (16 runs sampled)
    array.map x 6.46 ops/sec ±4.72% (13 runs sampled)
    powerArray.map x 4.19 ops/sec ±2.05% (12 runs sampled)

*Fastest is __fast.map,boostArray.$map,for loop,while,ramda.map,underscore.map__*

## index-of

    array.indexOf x 8,960 ops/sec ±2.48% (20 runs sampled)
    while x 3,484 ops/sec ±3.46% (13 runs sampled)
    for loop x 3,403 ops/sec ±4.42% (13 runs sampled)
    ramda.indexOf x 3,337 ops/sec ±3.74% (13 runs sampled)
    boostArray.$indexOf x 3,454 ops/sec ±8.28% (19 runs sampled)
    lodash.indexOf x 3,228 ops/sec ±2.69% (13 runs sampled)
    fast.indexOf x 3,095 ops/sec ±4.12% (13 runs sampled)
    underscore.indexOf x 2,943 ops/sec ±3.36% (12 runs sampled)
    powerArray.indexOf x 2,949 ops/sec ±3.94% (20 runs sampled)
    lazyWrap.indexOf x 1,562 ops/sec ±3.99% (20 runs sampled)

*Fastest is __array.indexOf__*

## for-each

    boostArray.$forEach x 24.96 ops/sec ±2.72% (15 runs sampled)
    ramda.forEach x 24.64 ops/sec ±3.21% (16 runs sampled)
    underscore.forEach x 24.34 ops/sec ±4.30% (15 runs sampled)
    fast.forEach x 24.30 ops/sec ±4.21% (15 runs sampled)
    lodash.forEach x 24.50 ops/sec ±7.45% (15 runs sampled)
    while x 23.35 ops/sec ±6.59% (15 runs sampled)
    for loop x 22.98 ops/sec ±6.67% (15 runs sampled)
    powerArray.forEach x 18.33 ops/sec ±4.54% (15 runs sampled)
    lazyWrap.each x 17.55 ops/sec ±8.16% (15 runs sampled)
    array.forEach x 15.76 ops/sec ±5.72% (14 runs sampled)

*Fastest is __boostArray.$forEach,ramda.forEach,underscore.forEach,fast.forEach,lodash.forEach__*

## filter

    lodash.filter x 12.19 ops/sec ±2.68% (13 runs sampled)
    fast.filter x 12.14 ops/sec ±4.68% (13 runs sampled)
    ramda.filter x 11.92 ops/sec ±3.51% (13 runs sampled)
    while x 11.63 ops/sec ±5.33% (15 runs sampled)
    boostArray.$filter x 11.50 ops/sec ±5.60% (14 runs sampled)
    underscore.filter x 11.02 ops/sec ±3.11% (15 runs sampled)
    lazyWrap.filter x 10.58 ops/sec ±3.30% (15 runs sampled)
    for loop x 10.57 ops/sec ±4.08% (15 runs sampled)
    array.filter x 5.58 ops/sec ±2.84% (12 runs sampled)

*Fastest is __lodash.filter,fast.filter,ramda.filter,while,boostArray.$filter__*

## concat

    ramda.concat x 99.31 ops/sec ±8.76% (17 runs sampled)
    underscoreWrap.concat x 78.43 ops/sec ±6.57% (17 runs sampled)
    boostArray.concat x 77.23 ops/sec ±6.11% (17 runs sampled)
    lodashWrap.concat x 75.91 ops/sec ±7.70% (19 runs sampled)
    array.concat x 71.98 ops/sec ±7.92% (17 runs sampled)
    fast.concat x 15.68 ops/sec ±36.71% (17 runs sampled)
    lazyWrap.concat x 12.19 ops/sec ±8.20% (13 runs sampled)
    powerArray.concat x 2.56 ops/sec ±1.96% (11 runs sampled)

*Fastest is __ramda.concat__*
