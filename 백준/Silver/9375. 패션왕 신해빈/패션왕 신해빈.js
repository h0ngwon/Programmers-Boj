const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const t = Number(input.shift());
const result = [];

for (let i = 0; i < t; i++) {
	const clothes = {};
	const n = Number(input.shift());

	for (let j = 0; j < n; j++) {
		const [cloth, type] = input.shift().split(" ");

		if (clothes[type]) {
			clothes[type] += 1;
		} else {
			clothes[type] = 1;
		}
	}

	const values = Object.values(clothes);
	let sum = values.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
	result.push(sum);
}

console.log(result.join("\n"));