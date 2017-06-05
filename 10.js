const R = require('ramda')
var diff = function(a, b) { return a - b; };
const unionIt = function(arr1, arr2){
  return R.sort(diff, R.uniq(R.concat(arr1, arr2)))
}
console.log(unionIt([1, 2, 3], [100, 2, 1, 10]))
