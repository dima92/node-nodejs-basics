import {fileURLToPath} from 'url'
import {dirname} from 'path'
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pathToFile = __dirname + '\\' + 'files'

export const list = async () => {
  fs.access(pathToFile, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log('checking access')
    if (err) {
      throw new Error('FS operation failed')
    } else {
      console.log('File can be read')
    }
  })
  fs.readdir(pathToFile, {withFileTypes: true}, (err, files) => {
    for (let file of files) {
      if (file.isFile()) {
        let fileFolder = `pathToFile/${file.name}`
        fs.stat(fileFolder, (err, stats) => {
          const fileName = `${file.name.split('.')[0]}`
          console.log(`---- File: ${fileName} ----`)
        })
      }
    }
  })
};

list()
