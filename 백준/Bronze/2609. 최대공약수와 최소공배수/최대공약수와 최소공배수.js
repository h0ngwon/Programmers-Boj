const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => b - a);

const a = Number(input[0]);
const b = Number(input[1]);

const gcd = (a, b) => {
  if(b === 0) return a;
  return gcd(b, a % b);
}

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
}

console.log(gcd(a, b));
console.log(lcm(a, b));