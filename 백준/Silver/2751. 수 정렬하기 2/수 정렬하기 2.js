const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0];
let arr = input.slice(1).sort((next, prev) => next - prev);

console.log(arr.join("\n"))