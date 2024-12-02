const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = Number(input.shift());
const a = input.shift().split(" ").map(Number);
const sortedA = [...a].sort((a, b) => a - b);
const p = [];

a.forEach((v, i) => {
	p[i] = sortedA.findIndex((elem, idx) => {
		if (elem === v && !p.includes(idx)) return true;
	});
});

console.log(p.join(" "));