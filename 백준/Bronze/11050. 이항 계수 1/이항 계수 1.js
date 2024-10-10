const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const N = input[0];
const K = input[1];

const factorial = (n) => {
  if(n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(N) / (factorial(N - K) * factorial(K)))