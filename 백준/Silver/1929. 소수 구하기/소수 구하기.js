const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ");

const [m, n] = input.map(Number);
const prime = { 1: true };
const result = [];

for (let i = 2; i <= Math.sqrt(n); i++) {
	if (prime[i]) continue;

	for (let j = i ** 2; j <= n; j += i) {
		prime[j] = true;
	}
}

for (let i = m; i <= n; i++) {
	if (!prime[i]) result.push(i);
}

console.log(result.join("\n"));
