/* eslint-env browser */

// eslint-disable-next-line no-unused-vars

function convertToHash32(str) {
  // Reference: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
  let hash32 = 0, i, chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash32 = ((hash32 << 5) - hash32) + chr;
    hash32 |= 0; // Convert to 32bit integer
  }
  return hash32
} 

function hash(...args) {
  // Convert args to single string
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
  // Create 64-bit hash from concatenated string
  // Reference: https://security.stackexchange.com/a/210049
  let hash32 = convertToHash32(concat)
  let hash64 = hash32 + convertToHash32(hash32 + concat)
  console.log("Hash: " + hash64)
  return hash64
}
