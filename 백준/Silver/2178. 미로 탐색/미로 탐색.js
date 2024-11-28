const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const map = input.map((v) => v.split("").map(Number));
let visited = Array.from({ length: n }, () => Array(m).fill(0));

const bfs = (startX, startY) => {
	let queue = [[startX, startY]];
	visited[startX][startY] = 1;

	const dx = [-1, 1, 0, 0];
	const dy = [0, 0, -1, 1];

	while (queue.length) {
		const [x, y] = queue.shift();

		for (let i = 0; i < 4; i++) {
			const nx = x + dx[i];
			const ny = y + dy[i];

			if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
				if (!visited[nx][ny] && map[nx][ny]) {
					visited[nx][ny] = visited[x][y] + 1;
					queue.push([nx, ny]);
				}
			}
		}
	}
};

bfs(0, 0);
console.log(visited[n - 1][m - 1]);