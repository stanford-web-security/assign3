/* eslint-env browser */

// eslint-disable-next-line no-unused-vars
function hash(...args) {
  let concat = "|"
  for (elem of args) {
    try {
      string = JSON.stringify(elem)
    } catch (e) {
      throw "Invalid argument passed in"
    }
    concat += string + "|"
  }
  console.log("Hashing concatenation: " + concat)
  let hash = hash = require('crypto').createHash('sha256').update(concat, 'utf8').digest('hex')
  return hash
}

// let test = document.getElementsByClassName("html")
// hash("a", -13789, null, true, NaN, [1,2,3], {a:3}, test)
// Output: hash of strings concatenated (find library to do SHA256 hash)