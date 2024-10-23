// 1. 큐에 N 까지 넣음
// 2. K 번째 제거
// 3. 빠진 수 큐에 다시 넣기

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ");

const [n, k] = input.map(Number);

const solution = (n, k) => {
	const queue = [];
	const answer = [];
	let cnt = 1;

	for (let i = 1; i <= n; i++) {
		queue.push(i);
	}

	while (queue.length) {
		const num = queue.shift();

		if (cnt % k === 0) {
			answer.push(num);
		} else {
			queue.push(num);
		}

		cnt++;
	}

	console.log(`<${answer.join(", ")}>`);
};

solution(n, k);