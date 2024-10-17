const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.slice(1)
	.map((e) => e.split(" ").map(Number));

let result = input
	.sort((a, b) => a[1] - b[1] || a[0] - b[0])
	.map((e) => e.join(" "))
	.join("\n");

console.log(result);
