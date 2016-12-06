# co-eachseries (Each series with ES6 generator co)
This package allow you to loop asynchronously over an array or object, step by step, similar to the async.eachSeries package.

## Install
``` npm install co-eachseries --save ```

## Install & Run example
``` npm install co-eachseries --dev ```

## Example
```
const co = require('co')
const wait = require('co-wait')
const eachSeries = require('./index')

co(function* () {
  const array = ['one', 'two', 'three']
  const obj = {one: '1', two: '2', three:'3'}
  try {
    yield eachSeries(array, function * (key, value) {
      console.log(key, value)
      yield wait(1000)
    })
  } catch (err) {
    console.log(err)
  }
})
```
