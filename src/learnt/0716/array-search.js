const b = Symbol('target')
const array = [
  { a: [] },
  { a: [b] },
  { a: [] }
]

const c = array.find(({ a }) => a.includes(b))

console.log(c)
