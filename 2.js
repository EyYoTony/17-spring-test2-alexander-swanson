const R = require('ramda')
const colorArr = ['black', 'green', 'blue', 'navy', 'orange', 'gold', 'purple']
const upper = inArr => inArr.map(x => R.toUpper(x.substring(0,1))+x.substring(1,x.length))
console.log(upper(colorArr))
