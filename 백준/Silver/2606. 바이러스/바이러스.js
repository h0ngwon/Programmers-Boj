const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = Number(input.shift());
const m = Number(input.shift());

const graph = Array.from(Array(n + 1), () => []);
const visited = Array.from(Array(n + 1), () => false);
let cnt = 0;

visited[1] = true; // 첫번째 컴퓨터 무조건 방문

for (let i = 0; i < m; i++) {
	// 연결된 정점 그래프에 추가
	const [first, second] = input.shift().split(" ").map(Number);
	graph[first].push(second);
	graph[second].push(first);
}

const dfs = (start) => {
	for (let i of graph[start]) {
		if (visited[i] === false) { // 방문처리 및 dfs 다시 실행
			visited[i] = true;
			cnt++;
			dfs(i);
		}
	}
};

dfs(1);
console.log(cnt);