import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {writeFile, access} from 'fs/promises'
import {constants} from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = async () => {

  try {
    const fileToPath = __dirname + '\\' + 'files' + '\\' + 'fresh.txt'
    await writeFile(fileToPath, 'I am fresh and young', (err) => {
      err ? console.log(err) : null
    })
    await access(fileToPath, constants.F_OK, (err) => {
      if (err)
        console.log(err)
    })
  } catch (e) {
    throw new Error('FS operation failed')
  }
};

create()
