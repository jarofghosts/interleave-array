var test = require('tape')

var interleave = require('../')

test('interleaves values from given arrays', function(t) {
  t.deepEqual(interleave([1, 2, 3], ['a', 'b', 'c']), [1, 'a', 2, 'b', 3, 'c'])

  t.end()
})

test('truncates to shortest length', function(t) {
  var arr1 = ['a', 'b', 'c', 'd']
    , arr2 = [10, 11, 12, 13, 14]
    , arr3 = [1, 2, 3]

  // 3 arrays * (shortest length) = 9
  t.equal(interleave(arr1, arr2, arr3).length, 9)
  t.end()
})

test('
