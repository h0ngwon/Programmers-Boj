const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const result = arr.filter(num => num < x);

console.log(result.join(' '));