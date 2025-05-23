const input = require("fs").readFileSync("dev/stdin").toString();

const n = Number(input);
const dp = Array(n + 1);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
	dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);
