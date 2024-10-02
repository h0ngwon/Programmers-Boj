const isPrimeNumber = (num) => {
  if(num == 1) {
    return false;
  }

  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

console.log(nums.filter(v => isPrimeNumber(v)).length);