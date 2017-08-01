import { platform } from 'os';
import { exec } from 'child_process';

/**
 * Timeout in seconds after which the computer will be shut down
 * @param {Number} s = 0 
 */
const shutDown = (s = 0) => new Promise(async (resolve, reject) => {
  let cmd = '';
  if (platform() === 'win32') {
    cmd = `shutdown -s -t ${s}`;
  } else {
    cmd = `sleep ${s}; sudo shutdown -h now`;
  }

  try {
    console.log('cmd', cmd);
    await exec(cmd);
    resolve();
  } catch (err) {
    reject(err);
  }
});

export default shutDown;
