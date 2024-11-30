const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const t = Number(input.shift());
const answer = [];

for (let i = 0; i < t; i++) {
	const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
	const planet = Number(input.shift());
	let cnt = 0;

	for (let j = 0; j < planet; j++) {
		const [cx, cy, r] = input.shift().split(" ").map(Number);

		if ((x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2) cnt++;
		if ((x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2) cnt++;
		if (
			(x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2 &&
			(x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2
		)
			cnt -= 2;
	}
	answer.push(cnt);
}

console.log(answer.join("\n"));