# interleave-array

[![Build Status](https://img.shields.io/travis/jarofghosts/interleave-array.svg?style=flat-square)](https://travis-ci.org/jarofghosts/interleave-array)
[![npm install](https://img.shields.io/npm/dm/interleave-array.svg?style=flat-square)](https://www.npmjs.org/package/interleave-array)
[![npm version](https://img.shields.io/npm/v/interleave-array.svg?style=flat-square)](https://www.npmjs.org/package/interleave-array)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/interleave-array.svg?style=flat-square)](https://github.com/jarofghosts/interleave-array/blob/master/LICENSE)

interleaves values from arrays into a new array

## example

```javascript
var interleave = require('interleave-array')

interleave(['a', 'b', 'c'], [1, 2, 3]) // ['a', 1, 'b', 2, 'c', 3]
```

## notes

interleaving is truncated at the length of the shortest provided array. for
example:

```js
interleave([1, 3], [2]) // [1, 2]
```

## license

MIT
