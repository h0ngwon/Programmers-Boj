const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [n, a, b] = input.split(" ").map(Number);
let count = 0;

while (a !== b) {
  a = Math.ceil(a / 2);
  b = Math.ceil(b / 2);
  count++;
}

if (a !== b) {
  return console.log(-1);
}

console.log(count);