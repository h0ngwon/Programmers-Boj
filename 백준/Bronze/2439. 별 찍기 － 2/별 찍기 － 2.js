const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

for(let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i));
}