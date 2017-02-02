function *recursionForArray (array, i, next) {
  yield next(array[i], i)
  i++
  if (i >= array.length) {
    return
  }
  yield recursionForArray(array, i, next)
}

function *recursionForObject (obj, keys, i, next) {
  yield next(keys[i], obj[keys[i]])
  i++
  if (i >= keys.length) {
    return
  }
  yield recursionForObject(obj, keys, i, next)
}

module.exports = function *(param, next) {
  if (Array.isArray(param)) {
    if (param.length > 0) yield recursionForArray(param, 0, next)
    else { return }
  } else if (param !== null && typeof param === 'object') {
    yield recursionForObject(param, Object.keys(param), 0, next)
  } else {
    throw new Error('eachSeries first argument should be an array or object')
  }
}
