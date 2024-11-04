const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const siteMap = new Map();

for (let i = 0; i < n; i++) {
	let [site, pwd] = input[i].split(" ");
	siteMap.set(site, pwd);
}

for (let i = n; i < n + m; i++) {
	let pwd = siteMap.get(input[i]);
  console.log(pwd)
}