const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [u, v] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = Array.from({ length: u + 1 }, () => []);
const visited = Array.from({ length: u + 1 }, () => false);
let answer = 0;

arr.map(([from, to]) => {
	graph[from].push(to);
	graph[to].push(from);
});

const dfs = (start) => {
	for (vertex of graph[start]) {
		if (!visited[vertex]) {
			visited[vertex] = true;
			dfs(vertex);
		}
	}
};

for (let i = 1; i <= u; i++) {
	if (!visited[i]) {
		dfs(i);
		answer++;
	}
}

console.log(answer);