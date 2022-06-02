import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {writeFile} from 'fs/promises'
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const fileToPath = __dirname + '\\' + 'files' + '\\' + 'fresh.txt'

export const create = async () => {
  fs.access(fileToPath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    console.log('checking access')
    if (err) {
      throw new Error('FS operation failed')
    } else {
      console.log('File can be read')
    }
  })
  await writeFile(fileToPath, 'I am fresh and young', (err) => {
    err ? console.log(err) : null
  })
};

create()
