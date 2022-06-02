import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {access, copyFile} from 'fs/promises'
import {constants, mkdir, readdir} from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const source = __dirname + '\\' + 'files'
const destination = __dirname + '\\' + 'files_copy'

export const copy = async () => {
  // if (await access(destination, constants.R_OK | constants.W_OK)) {
  await mkdir(destination, {recursive: true}, (err) => {
    err ? console.log(err) : null
    readdir(source, {withFileTypes: true}, (err, files) => {
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
