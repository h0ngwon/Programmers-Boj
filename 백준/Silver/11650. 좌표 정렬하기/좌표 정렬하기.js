//x 좌표가 증가하는순으로 정렬, x 좌표가 같으면 y가 증가하는 순으로 정렬
const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.slice(1)
	.map((e) => e.split(" ").map(Number));

let result = input
	.sort((a, b) => a[0] - b[0] || a[1] - b[1])
	.map((e) => e.join(" ")).join("\n");
  
console.log(result);
