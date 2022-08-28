import { http } from './ajax'

const methods = [
  'get'
//   'post',
//   'put',
//   'delete'
]
describe('fetch api mock', () => {
  test('available methods', () => {
    const methodObj = {}
    methods.forEach(method => {
      methodObj[method] = expect.any(Function)
    })
    expect(http).toMatchObject(methodObj)
  })
//   test('compliant with fetch api', () => {
//     expect()
//   })
})
