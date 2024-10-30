const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [k, n] = input.shift().split(" ").map(Number);
const cables = input.map(Number).sort((a, b) => a - b);
let max = Math.max(...cables);
let min = 1;

while (min <= max) {
	let mid = parseInt((min + max) / 2);
	let count = cables.reduce((acc, cur) => acc + parseInt(cur / mid), 0);

  if(count >= n) {
    min = mid + 1;
  }else {
    max = mid - 1;
  }
}

console.log(max);