const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = Number(input.shift());
const arr = [...input.map(Number)].sort((a, b) => a - b);

const result = [];

let avg = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);

if (avg === -0) {
	avg = 0;
}
result.push(avg);

const mid = arr[Math.floor(n / 2)];
result.push(mid);

const numMap = new Map();
let max = 1;
for (let i = 0; i < arr.length; i++) {
	if (!numMap.has(arr[i])) {
		numMap.set(arr[i], 1);
	} else {
		numMap.set(arr[i], numMap.get(arr[i]) + 1);
    max = Math.max(max, numMap.get(arr[i]));
	}
}

const maxArr = [];
for ([key, val] of numMap) {
	if (val === max) maxArr.push(key);
}

maxArr.length === 1 ? result.push(maxArr[0]) : result.push(maxArr[1]);

const range = arr[arr.length - 1] - arr[0];
result.push(range);

console.log(result.join("\n"));