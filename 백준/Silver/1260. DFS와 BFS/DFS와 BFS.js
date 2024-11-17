const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m, start] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
	const [a, b] = input.shift().split(" ").map(Number);
	graph[a].push(b);
	graph[b].push(a);
}

graph.forEach((v) => v.sort((a, b) => a - b));

const dfsVisited = Array(n + 1).fill(false);
const dfsResult = [];

const dfs = (v) => {
	if (dfsVisited[v]) return;

	dfsVisited[v] = true;
	dfsResult.push(v);

	for (let i of graph[v]) {
		if (dfsVisited[i] === false) {
			dfs(i);
		}
	}
};

dfs(start);
console.log(dfsResult.join(" "));

const bfsVisited = Array(n + 1).fill(false);
const bfsResult = [];

const bfs = (v) => {
	let queue = [v];
	while (queue.length) {
		let current = queue.shift();

		if (bfsVisited[current]) continue;

		bfsVisited[current] = true;
		bfsResult.push(current);

		for (let i of graph[current]) {
			if (bfsVisited[i] === false) {
				queue.push(i);
			}
		}
	}
};

bfs(start);
console.log(bfsResult.join(" "));