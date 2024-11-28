const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const t = Number(input.shift());
const result = [];

input.forEach((v) => {
	const [x1, y1, r1, x2, y2, r2] = v.split(" ").map(Number);
	const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

	if (r1 === r2 && dist === 0) result.push(-1);
	else if (r1 + r2 === dist || Math.abs(r1 - r2) === dist) result.push(1);
	else if (r1 + r2 < dist || Math.abs(r1 - r2) > dist) result.push(0);
	else if (r1 + r2 > dist && Math.abs(r1 - r2) < dist) result.push(2);
});

console.log(result.join("\n"));