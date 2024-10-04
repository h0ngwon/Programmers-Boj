const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);
let max = 0;

for(let i = 0; i < N; i++) {
  for(let j = i + 1; j < N; j++) {
    for(let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if(sum <= M) {
        max = Math.max(max, sum);
      }
    }
  }
}

console.log(max);