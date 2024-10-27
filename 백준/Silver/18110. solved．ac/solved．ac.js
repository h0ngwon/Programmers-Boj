// 1. 정렬
// 2. 절사평균 구해서 절사평균의 인덱스 제외하고 구하기

const input = require("fs")
	.readFileSync("dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = Number(input.shift());
const arr = input.map(Number);
const idx = Math.round(n * 0.15);
const nums = [];
let result;

if(n === 0) {
  console.log(0);
  return;
}

arr.sort((a, b) => a - b);

for (let i = idx; i < n - idx; i++) {
	nums.push(arr[i]);
}

result = nums.reduce((acc, cur) => acc + cur, 0);

console.log(Math.round(result / nums.length));