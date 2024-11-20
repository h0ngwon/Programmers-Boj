const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

[number, ...paper] = input;
number = Number(number);
paper = paper.map((string) => string.split(" ").map((i) => Number(i)));

const solution = (number, paper) => {
	let white = 0;
	let blue = 0;

	const divide = (x, y, length) => {
		let cnt = 0;
		for (let i = x; i < x + length; i++) {
			for (let j = y; j < y + length; j++) {
				if (paper[i][j]) cnt++;
			}
		}

		if (!cnt) {
			white++;
		} else if (cnt === length * length) {
			blue++;
		} else {
			divide(x, y, length / 2);
			divide(x, y + length / 2, length / 2);
			divide(x + length / 2, y, length / 2);
			divide(x + length / 2, y + length / 2, length / 2);
		}
	};
	divide(0, 0, number);
	console.log(white);
	console.log(blue);
};

solution(number, paper);