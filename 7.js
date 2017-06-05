const R = require('ramda')
const first = function(arr, n){
  n = n || 1
  return n <= 0 || arr.length === 0 ? [] : R.take(n,arr)
}
console.log(first([7, 9, 0, -2]))
console.log(first([],3))
console.log(first([7, 9, 0, -2],3))
console.log(first([7, 9, 0, -2],6))
console.log(first([7, 9, 0, -2],-3))
