const R = require('ramda')
var diff = function(a, b) { return a - b; }
const sortIt = arr => R.sort(diff, arr)
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
console.log(sortIt(arr1))
