const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

for(let i = 1; i <= t; i++) {
  const [r, s] = input[i].split(' ');
  const result = s.split('').map(x => x.repeat(r)).join('');
  console.log(result);
}