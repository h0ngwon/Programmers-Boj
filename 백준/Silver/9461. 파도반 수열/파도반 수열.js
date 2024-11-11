const input = require("fs")
	.readFileSync("dev/stdin")
	.toString()
	.trim()
	.split("\n");

const t = Number(input.shift());
const dp = Array(101);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for(let i = 0; i < t; i++) {
  const n = Number(input.shift());
  for(let i = 4; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  console.log(dp[n]);
}