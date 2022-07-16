/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path')
const fileName = process.argv.slice(2).join(' ')

require(resolve('src', fileName))
