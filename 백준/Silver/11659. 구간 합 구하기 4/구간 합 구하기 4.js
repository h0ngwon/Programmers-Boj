const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const ranges = input.slice().map((item) => item.split(" ").map(Number));
const sumArr = Array.from({ length: arr.length + 1 }, () => 0);
let answer = [];

arr.forEach((el, i) => {
	sumArr[i + 1] = sumArr[i] + el;
});

ranges.forEach((range) => {
	answer.push(sumArr[range[1]] - sumArr[range[0] - 1]);
});

console.log(answer.join("\n"));