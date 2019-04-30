# as-array [![Build status](https://travis-ci.org/strong-roots-capital/as-array.svg?branch=master)](https://travis-ci.org/strong-roots-capital/as-array) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/as-array.svg)](https://npmjs.org/package/@strong-roots-capital/as-array) [![codecov](https://codecov.io/gh/strong-roots-capital/as-array/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/as-array)

> Promote non-array values to an array

- dead-simple
- strongly-typed
- promotes objects as expected
- no dependencies

## Install

```shell
npm install @strong-roots-capital/as-array
```

## Use

```typescript
import asArray from '@strong-roots-capital/as-array'

console.log(asArray(null))
//=>[]

console.log(asArray(undefined))
//=>[]

console.log(asArray([]))
//=>[]

console.log(asArray('horse'))
//=>[ 'horse' ]

console.log(asArray(1))
//=>[ 1 ]

console.log(asArray([1, 2, 3]))
//=>[ 1, 2, 3 ]

console.log(asArray({foo: 'bar'}))
//=>[ { foo: 'bar' } ]

console.log(asArray([{foo: 'bar'}, {loo: 'fah'}]))
//=>[ { foo: 'bar' }, { loo: 'fah' } ]
```

## Related

- [make-array](https://github.com/kaelzhang/make-array)
- [as-array](https://github.com/scottcorgan/as-array)
