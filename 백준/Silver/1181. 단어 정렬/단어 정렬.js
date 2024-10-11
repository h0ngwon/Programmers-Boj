const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const strSet = new Set();

for(let i = 1; i < input.length; i++) {
  strSet.add(input[i]);
}

const arr = Array.from(strSet).sort((a, b) => a.length - b.length || a.localeCompare(b)).join("\n");
console.log(arr);