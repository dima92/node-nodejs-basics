import * as fs from 'fs'
import * as crypto from 'crypto'

export const calculateHash = async () => {
  const fd = fs.createReadStream('files/fileToCalculateHashFor.txt')
  const hash = crypto.createHash('sha256')
  hash.setEncoding('hex')

  fd.on('end', () => {
    hash.end()
    console.log(hash.read())
  })

  fd.pipe(hash)
};

calculateHash()
