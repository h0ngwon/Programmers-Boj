const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = Number(input.shift());
const arr = input.shift();
let str = "";
let cnt = 0;

for (let i = 0; i < n; i++) {
	if (arr[i] === "S") {
		str += "*S";
	} else {
		str += "*LL";
    i++;
	}
}

str += "*";

for (let i = 0; i < str.length; i++) {
	if (str[i] === "*") cnt++;
}

console.log(Math.min(n, cnt));