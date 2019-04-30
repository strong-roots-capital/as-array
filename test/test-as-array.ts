import test from 'ava'

/**
 * Library under test
 */

import asArray from '../src/as-array'

test('should not alter empty array', t => {
    t.deepEqual([], asArray([]))
})

test('should not alter array of single element', t => {
    const dut = [1]
    t.deepEqual(dut, asArray(dut))
})

test('should wrap string in array', t => {
    const dut = 'horse'
    t.deepEqual([dut], asArray(dut))
})

test('should not modify array of arrays', t => {
    const dut = [[1, 2, 3], [4], [5, [6]]]
    t.deepEqual(dut, asArray(dut))
})

test('should promote `undefined` to empty array', t => {
    t.deepEqual([], asArray(undefined))
})

test('should promote `null` to empty array', t => {
    t.deepEqual([], asArray(null))
})

test('should promote an object to an array', t => {
    const foo = {
        a: 1,
        b: 2,
        c: 'ah ah ah'
    }
    t.deepEqual([foo], asArray(foo))
})

test('should not promote an array of objects', t => {
    const foo = [{
        a: 1,
        b: 2,
        c: 'ah ah ah'
    }]
    t.deepEqual(foo, asArray(foo))
})
