const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input);
let cnt = 0;

while(n >= 5) {
  cnt += parseInt(n / 5);
  n /= 5;
} 

console.log(cnt);