const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const nSet = new Set();
const mSet = new Set();
let result = [];

for(let i = 0; i < input.length; i++) {
  if(i < n) {
    nSet.add(input[i]);
  }else {
    mSet.add(input[i]);
  }
}

nSet.forEach((e) => {
  if(mSet.has(e)) {
    result.push(e);
  }
});

console.log(result.length);
console.log(result.sort().join("\n"))