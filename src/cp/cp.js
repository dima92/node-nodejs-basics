import {fileURLToPath} from 'url'
import {dirname} from 'path'
import {fork} from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const spawnChildProcess = async (args) => {
  fork(__dirname + '\\files\\script.js', args)
};

await spawnChildProcess(['node', 'js', '16'])
