const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((row) => row.split(""));

let min = Math.min(n, m);
let width = 0;
let height = 0;
let max = 1;
let k = 1;

while (k < min) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i + k < n && j + k < m) {
        if (
          board[i][j] === board[i + k][j] &&
          board[i][j] === board[i][j + k] &&
          board[i][j] === board[i + k][j + k]
        ) {
          width = k + 1;
          height = k + 1;
          max = Math.max(max, width * height);
        }
      }
    }
  }
  k++;
}

console.log(max);