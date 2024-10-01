const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);

for(let i = 1; i <= t; i++) {
  const [h, w, n] = input[i].split(' ').map(Number);
  const floor = n % h;
  const room = Math.ceil(n / h);

  console.log(floor === 0 ? h * 100 + room : floor * 100 + room);
}