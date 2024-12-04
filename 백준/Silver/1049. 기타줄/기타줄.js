const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let [n, m] = input.shift().split(" ").map(Number);
let cost = 0;
let package = Math.min(
	...input.map((line) => line.split(" ").map(Number)[0])
);
let unit = Math.min(...input.map((line) => line.split(" ").map(Number)[1]));

while (true) {
	let set = Math.floor(n / 6);
	if (n < 6) {
		cost += Math.min(unit * n, package);
		break;
	} else {
		cost += Math.min(package * set, unit * (set * 6));
		n -= set * 6;
	}
}

console.log(cost);