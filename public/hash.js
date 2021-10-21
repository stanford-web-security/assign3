/* eslint-env browser */
/* global SipHash */

// eslint-disable-next-line no-unused-vars
function hash (...args) {
  // Convert args to single string
  let concat = '|'
  for (const elem of args) {
    // JSON.stringify doesn't do well with Infinity/NaN.
    if (typeof elem === 'number') {
      concat += String(elem) + '|'
    } else {
      try {
        concat += JSON.stringify(elem) + '|'
      } catch (e) {
        console.error('hash: invalid argument', elem)
        throw new Error('Invalid argument passed in')
      }
    }
  }

  // Randomly generated.
  const KEY = Uint32Array.of(2029485175, 3096562028, 3968892244, 1289180477)

  const hash64 = SipHash.hash_hex(KEY, concat)
  return [hash64.slice(0, 4), hash64.slice(4, 8), hash64.slice(8, 12), hash64.slice(12)].join('-')
}
