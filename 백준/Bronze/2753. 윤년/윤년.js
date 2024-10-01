const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = input;

if((n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0)) {
  console.log(1);
}else {
  console.log(0);
}