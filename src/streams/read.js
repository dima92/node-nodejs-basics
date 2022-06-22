import {fileURLToPath} from 'url'
import {dirname} from 'path'
import * as fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pathToFile = __dirname + '\\' + 'files' + '\\' + 'fileToRead.txt'

export const read = async () => {
  const readStream = fs.createReadStream(pathToFile, 'utf-8')
  readStream.on('data', (chunk) => {
    process.stdout.write(chunk)
  })
}

read()
