# Node.js 4.4.4 on Darwin 64-bit

## reduce

    fast.reduce x 889 ops/sec ±3.54% (23 runs sampled)
    boostArray.$reduce x 663 ops/sec ±4.14% (21 runs sampled)
    ramda.reduce x 653 ops/sec ±3.89% (21 runs sampled)
    for loop x 346 ops/sec ±2.34% (24 runs sampled)
    while x 335 ops/sec ±2.91% (24 runs sampled)
    underscore.reduce x 324 ops/sec ±2.69% (24 runs sampled)
    powerArray.forEach x 80.16 ops/sec ±2.97% (21 runs sampled)
    lazyWrap.reduce x 94.59 ops/sec ±26.02% (18 runs sampled)
    array.reduce x 75.23 ops/sec ±2.41% (23 runs sampled)
    lodash.reduce x 59.95 ops/sec ±2.48% (20 runs sampled)

*Fastest is __fast.reduce__*

## map

    fast.map x 167 ops/sec ±9.66% (21 runs sampled)
    for loop x 167 ops/sec ±11.18% (21 runs sampled)
    ramda.map x 155 ops/sec ±12.10% (20 runs sampled)
    while x 148 ops/sec ±13.09% (21 runs sampled)
    underscore.map x 146 ops/sec ±11.56% (22 runs sampled)
    boostArray.$map x 143 ops/sec ±10.76% (19 runs sampled)
    lodash.map x 118 ops/sec ±8.78% (20 runs sampled)
    array.map x 51.67 ops/sec ±2.82% (21 runs sampled)
    lazyWrap.map x 19.55 ops/sec ±27.49% (17 runs sampled)
    powerArray.map x 2.70 ops/sec ±2.08% (11 runs sampled)

*Fastest is __fast.map,for loop,ramda.map,while,underscore.map__*

## index-of

    array.indexOf x 9,659 ops/sec ±1.96% (26 runs sampled)
    boostArray.$indexOf x 4,142 ops/sec ±1.93% (25 runs sampled)
    while x 4,051 ops/sec ±2.13% (24 runs sampled)
    lodash.indexOf x 3,715 ops/sec ±1.85% (24 runs sampled)
    powerArray.indexOf x 3,740 ops/sec ±2.59% (24 runs sampled)
    fast.indexOf x 3,676 ops/sec ±1.82% (26 runs sampled)
    ramda.indexOf x 3,685 ops/sec ±2.15% (26 runs sampled)
    underscore.indexOf x 3,382 ops/sec ±2.40% (26 runs sampled)
    for loop x 3,268 ops/sec ±2.23% (25 runs sampled)
    lazyWrap.indexOf x 2,129 ops/sec ±1.81% (25 runs sampled)

*Fastest is __array.indexOf__*

## for-each

    underscore.forEach x 88.85 ops/sec ±2.72% (23 runs sampled)
    boostArray.$forEach x 86.26 ops/sec ±2.78% (22 runs sampled)
    ramda.forEach x 85.72 ops/sec ±2.25% (22 runs sampled)
    lodash.forEach x 85.51 ops/sec ±2.61% (22 runs sampled)
    powerArray.forEach x 83.72 ops/sec ±2.66% (22 runs sampled)
    lazyWrap.each x 83.66 ops/sec ±3.01% (22 runs sampled)
    fast.forEach x 83.71 ops/sec ±3.44% (22 runs sampled)
    for loop x 82.64 ops/sec ±3.14% (21 runs sampled)
    while x 79.87 ops/sec ±2.23% (21 runs sampled)
    array.forEach x 36.28 ops/sec ±1.95% (20 runs sampled)

*Fastest is __underscore.forEach__*

## filter

    lodash.filter x 57.81 ops/sec ±5.64% (20 runs sampled)
    fast.filter x 58.20 ops/sec ±8.04% (20 runs sampled)
    ramda.filter x 57.69 ops/sec ±8.29% (20 runs sampled)
    boostArray.$filter x 56.08 ops/sec ±10.32% (20 runs sampled)
    for loop x 53.10 ops/sec ±6.37% (19 runs sampled)
    while x 51.85 ops/sec ±8.82% (19 runs sampled)
    lazyWrap.filter x 37.70 ops/sec ±6.14% (18 runs sampled)
    underscore.filter x 40.45 ops/sec ±23.53% (18 runs sampled)
    array.filter x 20.94 ops/sec ±6.84% (16 runs sampled)

*Fastest is __lodash.filter,fast.filter,ramda.filter,boostArray.$filter,while__*

## concat

    array.concat x 125 ops/sec ±12.78% (20 runs sampled)
    underscoreWrap.concat x 119 ops/sec ±12.83% (21 runs sampled)
    boostArray.concat x 115 ops/sec ±10.20% (19 runs sampled)
    lodashWrap.concat x 119 ops/sec ±17.53% (22 runs sampled)
    ramda.concat x 100 ops/sec ±19.20% (21 runs sampled)
    fast.concat x 22.97 ops/sec ±48.74% (17 runs sampled)
    lazyWrap.concat x 15.27 ops/sec ±13.94% (15 runs sampled)
    powerArray.concat x 1.71 ops/sec ±4.64% (10 runs sampled)

*Fastest is __array.concat,underscoreWrap.concat,boostArray.concat,lodashWrap.concat__*

