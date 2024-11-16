const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const t = Number(input.shift());
const inputArr = input.map((v) => v.split(" ").map(Number));

let farm = [];
let visited = [];

const row = [0, 0, -1, 1];
const col = [-1, 1, 0, 0];

const dfs = (j, k, n, m) => {
	visited[j][k] = true;

	for (let i = 0; i < 4; i++) {
		let newJ = j + col[i];
		let newK = k + row[i];

		if (newJ >= 0 && newJ < n && newK >= 0 && newK < m) {
			if (farm[newJ][newK] === 1 && !visited[newJ][newK]) {
				dfs(newJ, newK, n, m);
			}
		}
	}
};

for (let i = 0; i < t; i++) {
	let answer = 0;
	let [m, n, k] = inputArr.shift();
	farm = Array.from(Array(n), () => Array(m).fill(0));
	visited = Array.from(Array(n), () => Array(m).fill(false));

	while (k > 0) {
		k--;
		const [x, y] = inputArr.shift();
		farm[y][x] = 1;
	}

	for (let j = 0; j < n; j++) {
		for (let k = 0; k < m; k++) {
			if (farm[j][k] === 1 && !visited[j][k]) {
				dfs(j, k, n, m);
				answer++;
			}
		}
	}

	console.log(answer);
}