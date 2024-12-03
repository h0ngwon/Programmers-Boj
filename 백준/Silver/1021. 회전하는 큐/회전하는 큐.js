const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const target = input.shift().split(" ").map(Number);
const deque = Array.from({ length: n }, (_, i) => i + 1);

let cnt = 0;

for (let i = 0; i < m; i++) {
	const t = target[i];

	if (t === deque[0]) {
		deque.shift();
		continue;
	} else {
		if (deque.indexOf(t) > deque.length / 2) {
			while (deque[0] !== t) {
				deque.unshift(deque.pop());
				cnt++;
			}
			deque.shift();
		} else {
			while (deque[0] !== t) {
				deque.push(deque.shift());
				cnt++;
			}
			deque.shift();
		}
	}
}

console.log(cnt);