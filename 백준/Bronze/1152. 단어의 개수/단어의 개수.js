const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

if(input[0] === '') {
  console.log(0);
} else {
  console.log(input.length);
}