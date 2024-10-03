const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
let i = 1;
let sum = 1;

while(true) {
  if(n <= sum) {
    return console.log(i);
  }
  sum += 6 * i;
  i++;
}

// 1 7 19 37 61