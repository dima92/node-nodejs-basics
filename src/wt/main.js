import * as workerJS from 'worker_threads'
import * as os from 'os'

export const performCalculations = async () => {
  const cpus = os.cpus()
  const arr = []
  for (let i = 1; i <= cpus.length; i++) {
    arr.push(new Promise((resolve, reject) => {
      resolve(new workerJS.Worker('./worker.js', {
        workerData: 10 + i
      }).on('message', msg => {
        return msg
      }))
    }))
  }
  await Promise.allSettled(arr).then(value => {
    console.log(value)
  })
};

performCalculations()
