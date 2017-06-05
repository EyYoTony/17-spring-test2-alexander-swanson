const R = require('ramda')
const stringParameterize = inStr => R.replace(/ /g,'-',R.toLower(inStr))
console.log(stringParameterize("Robin Singh from USA."))
