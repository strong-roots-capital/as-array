import test from 'ava'

/**
 * Library under test
 */

import asArray from '../src/as-array'

test('should not alter empty array', t => {
    t.deepEqual([], asArray([]))
})
