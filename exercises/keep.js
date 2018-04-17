'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(string) {
  return string.substr(0, 2);
}

function keepLast(string) {
  return string.substr(string.length - 2, 2);
}

function keepFirstLast(string) {
  return string.substr(2, 2);
}
//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.deepStrictEqual(keepFirst('coupage'), 'co')
assert.deepStrictEqual(keepFirst('chut'), 'ch')
assert.deepStrictEqual(keepFirst('hello world'), 'he')

assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.deepStrictEqual(keepLast('coupage'), 'ge')
assert.deepStrictEqual(keepLast('chut'), 'ut')
assert.deepStrictEqual(keepLast('hello world'), 'ld')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirstLast('coupage'), 'up')
assert.deepStrictEqual(keepFirstLast('chut'), 'ut')
assert.deepStrictEqual(keepFirstLast('hello world'), 'll')
// End of tests */
