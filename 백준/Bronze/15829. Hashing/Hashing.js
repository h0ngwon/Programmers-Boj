const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const L = Number(input[0]);
const str = input[1];

let sum = 0n;
let r = 31n;
let M = 1234567891n;

for(let i = 0; i < L; i++) {
  sum += (BigInt(str[i].charCodeAt() - 96) * BigInt(r ** BigInt(i)));
}

console.log(Number(sum % M));