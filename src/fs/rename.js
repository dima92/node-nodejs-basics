import {fileURLToPath} from 'url'
import {dirname} from 'path'
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pathToFile = __dirname + '\\' + 'files' + '\\' + 'wrongFilename.txt'
const pathToFileRename = __dirname + '\\' + 'files' + '\\' + 'properFilename.md'

export const rename = async () => {
  try {
    fs.rename(pathToFile, pathToFileRename, () => {
      console.log('File renamed.')
    })
  } catch (e) {
    throw new Error(e)
  }
};

rename()
