const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const numSet = Array.from(new Set(arr)).sort((a, b) => a - b);
const obj = {};
const answer = [];

numSet.forEach((item, idx) => {
	obj[item] = idx;
});

for (let i = 0; i < n; i++) {
	answer.push(obj[arr[i]]);
}

console.log(answer.join(" "));