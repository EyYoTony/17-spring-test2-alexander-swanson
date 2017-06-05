const R = require('ramda')
const colorArr = ['black', 'green', 'blue', 'navy', 'orange', 'gold', 'purple']
const reverse = inArr => R.reverse(inArr)
console.log(reverse(colorArr))
