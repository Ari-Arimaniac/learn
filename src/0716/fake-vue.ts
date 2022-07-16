const triggerRender = () => {
  console.log('re-render')
}
const ref = (val) => {
  const rtn = {
    _value: val,
    get value () {
      return rtn._value
    },
    set value (val) {
      this._value = val
      triggerRender()
    }
  }
  return rtn
}

class Computed {
  private readonly _get: any
  private readonly _set: any
  private readonly _wrapped: any

  constructor ({ set, get }, wrapped) {
    this._set = set || (() => {})
    this._get = get
    this._wrapped = wrapped
  }

  // value: this._get(this._wrapped),
  get value () {
    return this._get(this._wrapped)
  }

  update (val) { this._set(val, this._wrapped.value) }
}

// const unref = (ref) => ref._value

const wrapped = ref(1) // {_value: 1}
type Reactive = any
const reactive = <T extends {}>(obj: T): Reactive => {
  const _local = {}
  Object.entries(obj).forEach(([key, value]) => {
    _local[key] = ref(value)
  })

  return new Proxy(_local, {
    get (obj, key) {
      return _local[key].value
    },
    set (obj, key, value) {
      _local[key].value = value
      return true
    }
  })
}

// const auto = new Computed({
//   set (val, oldVal) {
//     console.log('set', oldVal, 'to', val)
//   },
//   get (val) {
//     return val.value * 2
//   }
// }, wrapped)

const page = reactive({
  taxClass: 0,
  option: ['1']
})

const render = () => `<template>${page.option}</template>`

console.log(render())

page.option = new Array(100).fill(1)
console.log(render())
