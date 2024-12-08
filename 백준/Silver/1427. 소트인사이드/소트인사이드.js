const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let nums = input
  .split("")
  .map(Number)
  .sort((a, b) => b - a)
  .join("");

console.log(nums);