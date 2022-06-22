import * as fs from 'fs'
import * as zlib from 'zlib'

export const decompress = async () => {
  const gunzip = zlib.createGunzip()
  const input = fs.createReadStream('files/archive.gz')
  const output = fs.createWriteStream('files/fileToCompress.txt')

  input.pipe(gunzip).pipe(output)
};

decompress()
