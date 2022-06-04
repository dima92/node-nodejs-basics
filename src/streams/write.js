import {fileURLToPath} from 'url'
import {dirname} from 'path'
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pathToFile = __dirname + '\\' + 'files' + '\\' + 'fileToWrite.txt'

export const write = async () => {
  const writeStream = fs.createWriteStream(pathToFile)
  process.stdin.on('data', data => {
    writeStream.write(data.toString())
  })
};

write()
