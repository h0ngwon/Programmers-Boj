const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.split(" ")
	.map(Number);

const [A, B] = input;
let answer = -1;

const dfs = (num, count) => {
	if (num === B) {
		answer = count + 1;
	} else {
		if (num * 2 <= B) {
			dfs(num * 2, count + 1);
		}
		if (num * 10 + 1 <= B) {
			dfs(num * 10 + 1, count + 1);
		}
	}
};

dfs(A, 0);
console.log(answer);