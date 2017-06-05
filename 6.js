const R = require('ramda')
const search_word = function(inStr, keyWord){
  return `'${keyWord}' was found ${R.match(RegExp(keyWord, 'g'), inStr).length} times`
}
console.log(search_word('The quick brown fox', 'fox'))
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
