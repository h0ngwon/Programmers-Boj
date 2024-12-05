const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let x = Number(input);
let answer = 0;

while (x > 0) {
  if (x % 2) answer++;
  x = parseInt(x / 2);
}
answer = answer <= 0 ? 1 : answer;
console.log(answer);