const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// Parse input
const l = parseInt(input[0]);
const data = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const n = parseInt(input[2]);

let startPoint = -1;
let endPoint = 10000;

for (const number of data) {
  if (number < n) {
    startPoint = number;
  } else if (number > n) {
    if (endPoint > number) {
      endPoint = number;
    }
  } else {
    console.log(0);
    return;
  }

  if (startPoint !== -1 && endPoint !== 10000) {
    break;
  }
}

if (startPoint === -1) {
  startPoint = 0;
}
if (endPoint === -1) {
  endPoint = 1001;
}

let answer = 0;
for (let i = startPoint + 1; i < endPoint; i++) {
  if (i > n) {
    break;
  }

  for (let j = n; j < endPoint; j++) {
    if (i === j) {
      continue;
    }
    answer++;
  }
}

console.log(answer);