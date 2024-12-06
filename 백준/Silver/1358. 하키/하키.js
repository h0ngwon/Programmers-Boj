const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [w, h, x, y, p] = input[0].split(" ").map(Number);
let answer = 0;

for(let i = 1; i <= p; i++) {
  const [px, py] = input[i].split(" ").map(Number);
  if(px >= x && px <= x + w && py >= y && py <= y + h) {
    answer++;
  } else if (px < x && py < y + h && Math.sqrt((x - px) ** 2 + (y + h / 2 - py) ** 2) <= h / 2) {
    answer++;
  } else if (px > x + w && py < y + h && Math.sqrt((x + w - px) ** 2 + (y + h / 2 - py) ** 2) <= h / 2) {
    answer++;
  }
}
console.log(answer);