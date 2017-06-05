const R = require('ramda')
const uniqueIt = arr => R.uniq(arr)
console.log(uniqueIt([1, 1, 2, 1, 2, 3, 1]))
