const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const t = parseInt(input.shift());

function factorial(num) {
	if (num <= 1) return 1;
	return num * factorial(num - 1);
}

for (let i = 0; i < t; i++) {
	const arr = input[i].split(" ");
	const n = parseInt(arr[0]);
	const m = parseInt(arr[1]);
	console.log(Math.round(factorial(m) / (factorial(m - n) * factorial(n))));
}