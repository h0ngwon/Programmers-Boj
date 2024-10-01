const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = input;

for(let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}