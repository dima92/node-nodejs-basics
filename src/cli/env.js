export const parseEnv = () => {
  const {env} = process;
  console.log(env['RSS']);
};

parseEnv()
