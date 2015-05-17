module.exports = interleave

function interleave() {
  var arrays = [].slice.call(arguments)
  var length = Math.min.apply(Math, arrays.map(lengths))
  var result = []
  var idx = 0

  for(; idx < length; ++idx) {
    result = result.concat(arrays.map(index(idx)))
  }

  return result
}

function index(idx) {
  return function getIndex(arr) {
    return arr[idx]
  }
}

function lengths(arr) {
  return arr.length
}
