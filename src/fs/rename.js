import {fileURLToPath} from 'url'
import {dirname} from 'path'
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pathToFile = __dirname + '\\' + 'files' + '\\' + 'wrongFilename.txt'
const pathToFileRename = __dirname + '\\' + 'files' + '\\' + 'properFilename.md'

export const rename = async () => {
  fs.access(pathToFile, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log('checking access')
    if (err) {
      throw new Error('FS operation failed')
    } else {
      console.log('File can be read')
    }
  })
  fs.rename(pathToFile, pathToFileRename, () => {
    console.log('File renamed.')
  })
};

rename()
