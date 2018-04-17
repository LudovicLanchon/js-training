'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 * and wrapped by `*`
 *
 */

function whisper(string) {
  return string.toLowerCase().replace(/ /g, '*');
}
//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('Chuchotement'), 'chuchotement')
assert.deepStrictEqual(whisper('CHUCHOTE BORDEL'), 'chuchote*bordel')
assert.deepStrictEqual(whisper('BIEN TU comprends Vite'),
  'bien*tu*comprends*vite')
// End of tests */
