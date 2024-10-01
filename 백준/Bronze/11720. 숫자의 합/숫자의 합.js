const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split('').map(Number);

console.log(nums.reduce((acc, cur) => acc + cur, 0));