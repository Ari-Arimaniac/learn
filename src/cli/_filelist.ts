import glob from 'glob'
import { relative } from 'path'
import { prompt } from 'inquirer'
import { detect } from 'detect-package-manager'
const runCommand = async () => await detect()
  .then(pm => {
    switch (pm) {
      case 'npm': {
        return 'npm run'
      }
      case 'yarn': { return 'yarn' }
      default: { return '%your packet manager run command%' }
    }
  })

const r = 'src/learnt'
export default function (path) {
  console.log(r)
  glob(`${path}/**/*.+(js|ts|tsx|jsx)`, async (_err, files) => {
    const prompts = files.map(file => ({ name: relative(path, file), value: relative(r, file) }))
    if (!prompts.length) { return console.log('no files / index.(ts|js) in this folder') }
    const choice = await prompt([{ type: 'list', name: 'filePicked', choices: prompts }])
    console.clear()
    console.log('run this command:', `${await runCommand()} dev ${choice.filePicked}`)
    console.log('contorl c to quit.')
  })
}
