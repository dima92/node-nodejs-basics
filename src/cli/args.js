const {argv} = process

export const parseArgs = () => {
  let i = 2
  const arr = []
  while (i < argv.length) {
    arr.push(`${argv[i].replaceAll('-', '')} is ${argv[i + 1]}`);
    i = i + 2
  }
  console.log(arr.join(', '))
};

parseArgs()
