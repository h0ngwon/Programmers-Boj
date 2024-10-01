const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const sum = input.reduce((acc, cur) => acc + cur ** 2, 0);

console.log(sum % 10);