/* eslint-env browser */
/* global SipHash */

// eslint-disable-next-line no-unused-vars
function hash (...args) {
  // Convert args to single string
  let concat = '|'
  for (let elem of args) {
    // JSON.stringify oddly returns "null" for Infinity/NaN, so special-case.
    if (typeof elem === 'number') {
      concat += String(elem) + '|'
      continue
    }

    // Forbid or rewrite some types of objects.
    if (elem instanceof Promise) {
      throw new TypeError('Promise object passed to hash()')
    } else if (elem instanceof Node) {
      throw new TypeError('DOM Node object passed to hash()')
    } else if (typeof elem === 'symbol' || elem instanceof Symbol) {
      throw new TypeError('Symbol passed to hash()')
    } else if (elem instanceof ArrayBuffer) {
      // Uint8Array supports JSON.stringify.
      elem = new Uint8Array(elem)
    } else if (elem instanceof DataView) {
      elem = new Uint8Array(elem.buffer, elem.byteOffset, elem.byteLength)
    }

    try {
      concat += JSON.stringify(elem) + '|'
    } catch (e) {
      console.error('hash: invalid argument', elem)
      throw new TypeError('Invalid argument passed to hash()')
    }
  }

  // Arbitrarily generated.
  const KEY = Uint32Array.of(2029485175, 3096562028, 3968892244, 1289180477)

  const hash64 = SipHash.hash_hex(KEY, concat)
  return [hash64.slice(0, 4), hash64.slice(4, 8), hash64.slice(8, 12), hash64.slice(12)].join('-')
}
