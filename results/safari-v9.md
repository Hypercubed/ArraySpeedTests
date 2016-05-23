# Safari 9.0.2 on OS X 10.11.2

## reduce

    boostArray.$reduce x 1,289 ops/sec ±3.75% (20 runs sampled)
    while x 1,070 ops/sec ±3.08% (21 runs sampled)
    for loop x 1,018 ops/sec ±3.18% (20 runs sampled)
    lodash.reduce x 918 ops/sec ±3.49% (20 runs sampled)
    underscore.reduce x 736 ops/sec ±6.30% (19 runs sampled)
    powerArray.forEach x 745 ops/sec ±18.78% (21 runs sampled)
    lazyWrap.reduce x 329 ops/sec ±2.73% (21 runs sampled)
    fast.reduce x 204 ops/sec ±35.62% (12 runs sampled)
    ramda.reduce x 125 ops/sec ±3.94% (19 runs sampled)
    array.reduce x 37.06 ops/sec ±9.36% (15 runs sampled)

*Fastest is __boostArray.$reduce__*

## map

    lodash.map x 178 ops/sec ±3.16% (19 runs sampled)
    boostArray.$map x 86.73 ops/sec ±15.09% (14 runs sampled)
    fast.map x 82.81 ops/sec ±15.46% (14 runs sampled)
    ramda.map x 76.63 ops/sec ±13.63% (15 runs sampled)
    underscore.map x 69.77 ops/sec ±7.21% (16 runs sampled)
    for loop x 77.42 ops/sec ±20.81% (14 runs sampled)
    while x 73.12 ops/sec ±18.59% (13 runs sampled)
    lazyWrap.map x 46.69 ops/sec ±2.67% (18 runs sampled)
    array.map x 21.87 ops/sec ±4.82% (14 runs sampled)
    powerArray.map x 9.24 ops/sec ±3.60% (14 runs sampled)

*Fastest is __lodash.map__*

## index-of

    boostArray.$indexOf x 29,712 ops/sec ±3.31% (20 runs sampled)
    while x 28,304 ops/sec ±5.85% (21 runs sampled)
    for loop x 27,910 ops/sec ±6.60% (21 runs sampled)
    lazyWrap.indexOf x 18,558 ops/sec ±5.68% (21 runs sampled)
    lodash.indexOf x 12,970 ops/sec ±5.20% (22 runs sampled)
    powerArray.indexOf x 8,288 ops/sec ±7.18% (17 runs sampled)
    array.indexOf x 7,587 ops/sec ±9.25% (17 runs sampled)
    fast.indexOf x 2,188 ops/sec ±14.89% (13 runs sampled)
    ramda.indexOf x 2,116 ops/sec ±11.81% (12 runs sampled)
    underscore.indexOf x 1,947 ops/sec ±4.38% (11 runs sampled)

*Fastest is __boostArray.$indexOf,while__*

## for-each

    lodash.forEach x 19.49 ops/sec ±1.82% (16 runs sampled)
    fast.forEach x 20.87 ops/sec ±11.68% (13 runs sampled)
    ramda.forEach x 21.29 ops/sec ±14.49% (13 runs sampled)
    boostArray.$forEach x 20.51 ops/sec ±12.23% (13 runs sampled)
    for loop x 21.86 ops/sec ±21.75% (13 runs sampled)
    underscore.forEach x 18.76 ops/sec ±8.28% (16 runs sampled)
    lazyWrap.each x 16.74 ops/sec ±4.51% (15 runs sampled)
    while x 18.37 ops/sec ±16.89% (13 runs sampled)
    powerArray.forEach x 13.85 ops/sec ±5.86% (14 runs sampled)
    array.forEach x 10.26 ops/sec ±9.25% (14 runs sampled)

*Fastest is __lodash.forEach,fast.forEach,ramda.forEach,boostArray.$forEach,for loop,underscore.forEach__*

## filter

    for loop x 29.38 ops/sec ±11.76% (16 runs sampled)
    fast.filter x 27.12 ops/sec ±4.76% (16 runs sampled)
    while x 25.60 ops/sec ±6.51% (15 runs sampled)
    boostArray.$filter x 24.99 ops/sec ±15.50% (16 runs sampled)
    underscore.filter x 22.81 ops/sec ±6.71% (16 runs sampled)
    ramda.filter x 22.37 ops/sec ±7.29% (17 runs sampled)
    lazyWrap.filter x 22.02 ops/sec ±6.19% (16 runs sampled)
    lodash.filter x 18.21 ops/sec ±2.85% (15 runs sampled)
    array.filter x 18.36 ops/sec ±5.39% (15 runs sampled)

*Fastest is __for loop,fast.filter__*

## concat

    ramda.concat x 66.12 ops/sec ±11.09% (16 runs sampled)
    underscoreWrap.concat x 58.94 ops/sec ±4.86% (18 runs sampled)
    array.concat x 52.72 ops/sec ±6.84% (18 runs sampled)
    boostArray.concat x 51.85 ops/sec ±6.56% (17 runs sampled)
    lodashWrap.concat x 54.15 ops/sec ±11.39% (18 runs sampled)
    lazyWrap.concat x 34.71 ops/sec ±5.69% (17 runs sampled)
    fast.concat x 19.89 ops/sec ±3.94% (16 runs sampled)
    powerArray.concat x 5.31 ops/sec ±7.11% (12 runs sampled)

*Fastest is __ramda.concat,underscoreWrap.concat,lodashWrap.concat__*
