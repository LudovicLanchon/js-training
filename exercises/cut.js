'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 first characters
 * Create the function `cutLast` that takes a string and remove the 2 last charcters
 * Create the function `cutFirstLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst(string) {
  return string.substr(2);
}

function cutLast(string) {
  return string.slice(0, -2);

}

function cutFirstLast(string) {
  return string.slice(2, -2);

}
//* Begin of tests
const assert = require('assert')

// assert.fail('You must write your own tests')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.deepStrictEqual(cutFirst('coupage'), 'upage')
assert.deepStrictEqual(cutFirst('chut'), 'ut')
assert.deepStrictEqual(cutFirst('hello world'), 'llo world')

assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.deepStrictEqual(cutLast('coupage'), 'coupa')
assert.deepStrictEqual(cutLast('chut'), 'ch')
assert.deepStrictEqual(cutLast('hello world'), 'hello wor')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirstLast('coupage'), 'upa')
assert.deepStrictEqual(cutFirstLast('chut'), '')
assert.deepStrictEqual(cutFirstLast('hello world'), 'llo wor')
// End of tests */
