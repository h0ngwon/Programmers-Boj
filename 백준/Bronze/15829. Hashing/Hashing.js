const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const L = Number(input[0]);
const str = input[1];

let sum = 0;

for(let i = 0; i < L; i++) {
  sum += (str[i].charCodeAt() - 96) * (31 ** i);
}

console.log(sum % 1234567891);