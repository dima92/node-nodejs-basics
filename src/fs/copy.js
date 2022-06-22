import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {copyFile} from 'fs/promises'
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const source = __dirname + '\\' + 'files'
const destination = __dirname + '\\' + 'files_copy'

export const copy = async () => {
  fs.access(source, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log('checking access')
    if (err) {
      throw new Error('FS operation failed')
    } else {
      console.log('File can be read')
    }
  })
  await fs.mkdir(destination, {recursive: true}, (err) => {
    err ? console.log(err) : null
    fs.readdir(source, {withFileTypes: true}, (err, files) => {
      err ? console.log(err) : null
      for (let file of files) {
        const filename = file.name.toString()

        copyFile(source + '\\' + filename, destination + '\\' + filename)
          .catch(err => console.log(err))
      }
    })
  })
}

copy()
