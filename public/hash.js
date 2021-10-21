/* eslint-env browser */

/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 * https://github.com/garycourt/murmurhash-js/blob/0197ce38bedac0e05f40b9d7152095d06db8292c/murmurhash3_gc.js
 *
 * Copyright (c) 2011 Gary Court
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Modified by Timothy Gu to support UTF-8 strings and use Uint8Array/DataView.
 */
function murmurhash3 (keyStr, seed) {
  const key = new TextEncoder().encode(keyStr)
  const keyView = new DataView(key.buffer, key.byteOffset, key.byteLength)

  let h1 = seed
  const c1 = 0xcc9e2d51
  const c2 = 0x1b873593
  let i = 0
  while (i < key.length - 3) {
    let k1 = keyView.getUint32(i, true)
    i += 4

    k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff
    k1 = (k1 << 15) | (k1 >>> 17)
    k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff

    h1 ^= k1
    h1 = (h1 << 13) | (h1 >>> 19)
    const h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff
    h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16))
  }

  {
    let k1 = 0
    switch (key.length - i) {
      case 3: k1 ^= key[i + 2] << 16 // fallthrough
      case 2: k1 ^= key[i + 1] << 8 // fallthrough
      case 1: k1 ^= key[i]

        k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff
        k1 = (k1 << 15) | (k1 >>> 17)
        k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff
        h1 ^= k1
    }
  }

  h1 ^= key.length

  h1 ^= h1 >>> 16
  h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff
  h1 ^= h1 >>> 13
  h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff
  h1 ^= h1 >>> 16

  return h1 >>> 0
}

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

  const SEED = 0xdeadbeef
  const hex32 = num => num.toString(16).padStart(8, '0').toUpperCase()

  // Create 64-bit hash from concatenated string
  // Reference: https://security.stackexchange.com/a/210049
  const hash32 = hex32(murmurhash3(concat, SEED))
  const hash64 = hash32 + hex32(murmurhash3(hash32 + concat, SEED))
  return [hash64.slice(0, 4), hash64.slice(4, 8), hash64.slice(8, 12), hash64.slice(12)].join('-')
}
