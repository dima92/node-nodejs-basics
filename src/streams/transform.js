import {Transform, pipeline} from 'stream'

const readable = process.stdin
const writable = process.stdout

export async const transform = new Transform({
  transform(chunk, encoding, callback) {
    const chunkStringified = chunk.toString().trim()
    const reversedChunck = chunkStringified.split('').reverse().join('')
    this.push(reversedChunck + '\n')
    callback()
  }
})

pipeline(
  readable, transform, writable, err => {
    console.log(err)
  }
)
