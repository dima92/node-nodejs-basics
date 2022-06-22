import * as fs from 'fs'
import * as zlib from 'zlib'

export const compress = async () => {
  const gzip = zlib.createGzip()
  const input = fs.createReadStream('files/fileToCompress.txt')
  const output = fs.createWriteStream('files/archive.gz')

  input.pipe(gzip).pipe(output)
};

compress()
