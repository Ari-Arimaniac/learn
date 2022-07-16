/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const fileName = process.argv.slice(2).join(' ').trim()

if (!fileName) {
  require('./cli/_filelist').default()
} else {
  const file = resolve('src/learnt', fileName)
  console.log(file)
  try {
    require(file)
  } catch (e) {
    require('./cli/_filelist').default(file)
  }
}
