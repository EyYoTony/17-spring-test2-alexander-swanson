const R = require('ramda')
const keysList = inObj => R.keys(inObj).join(',')
var student = { name : "David Ray", sclass : "VI", rollno : 12 }
console.log(keysList(student))
