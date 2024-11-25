const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const bacon = Array.from({ length: n + 1 }, () => 0);

input.forEach((v) => {
	const [start, end] = v.split(" ");
	graph[start].push(end);
	graph[end].push(start);
});

const bfs = (start) => {
	const visited = Array.from({ length: n + 1 }, () => false);
	const queue = [[start, 0]];

	while (queue.length) {
		let [node, cnt] = queue.shift();
		if (!visited[node]) {
			visited[node] = true;
			bacon[start] += cnt++;
			graph[node].forEach((v) => queue.push([v, cnt]));
		}
	}
};

for (let i = 1; i <= n; i++) {
	bfs(i);
}

bacon.shift();
console.log(bacon.indexOf(Math.min(...bacon)) + 1);