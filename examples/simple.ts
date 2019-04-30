import asArray from '../src/as-array'

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
