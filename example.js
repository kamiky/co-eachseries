const co = require('co')
const wait = require('co-wait')
const eachSeries = require('./index')

co(function* () {
  const array = ['one', 'two', 'three']
  const obj = {one: '1', two: '2', three:'3'} // work with object too
  try {
    yield eachSeries(array, function * (value, index) {
      console.log(value, index)
      yield wait(1000)
    })
  } catch (err) {
    console.log(err)
  }
})

