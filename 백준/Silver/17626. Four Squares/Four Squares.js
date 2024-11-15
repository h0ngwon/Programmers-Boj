const input = require("fs").readFileSync("/dev/stdin").toString();

const n = Number(input);
const dp = Array(n + 1);

dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1];
	for (let j = 1; j * j <= i; j++) {
		dp[i] = Math.min(dp[i], dp[i - (j * j)]);
	}
	dp[i]++;
}

console.log(dp[n]);

// 1 -> 1^2 -> 1개
// 2 -> 1^2 + 1^2 -> 2개
// 3 -> 1^2 + 1^2 + 1^2 -> 3개
// 4 -> 2^2 -> 1개
// 5 -> 2^2 + 1^2 -> 2개
// 6 -> 2^2 + 1^2 + 1^2 -> 3개
// 7 -> 2^2 + 1^2 + 1^2 + 1^2 -> 4개
// 8 -> 2^2 + 2^2 -> 2개
// 9 -> 3^3 -> 1개