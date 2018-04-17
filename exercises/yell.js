'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
function yell(string) {
  return string.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell('bonjour'), 'BONJOUR')
assert.deepStrictEqual(yell('bonjour monsieur'), 'BONJOUR MONSIEUR')
// End of tests */
