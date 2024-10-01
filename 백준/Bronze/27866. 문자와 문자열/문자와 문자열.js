const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [str, i] = input;

console.log(str[i - 1]);