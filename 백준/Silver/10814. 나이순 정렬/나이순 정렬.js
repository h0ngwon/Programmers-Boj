const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

[n, ...arr] = input;

const result = arr.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(result.join("\n"));