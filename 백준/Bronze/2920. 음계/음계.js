const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const asc = '1 2 3 4 5 6 7 8';
const desc = '8 7 6 5 4 3 2 1';

if(input === asc) {
  console.log('ascending');
} else if(input === desc) {
  console.log('descending');
} else {
  console.log('mixed');
}