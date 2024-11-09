// dp[1] = 1
// dp[2] = 1+1, 2
// dp[3] = 1+1+1, 1+2, 2+1, 3
// dp[4] = 7
// dp[4] = dp[3] + dp[2] + dp[1]
// dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 3];

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");


const t = Number(input.shift());
const dp = Array(t + 1);
const result = [];

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for(let i = 0; i < t; i++) {
  const n = Number(input[i]);

  for(let i = 4; i <= n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  result.push(dp[n]);
}

console.log(result.join("\n"))