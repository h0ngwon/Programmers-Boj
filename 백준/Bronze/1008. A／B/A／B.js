const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [a, b] = input;

console.log(a / b);