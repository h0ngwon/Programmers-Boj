const input = require("fs").readFileSync("/dev/stdin").toString().trim();

// 1 -> 666
// 2 -> 1666
// 3 -> 2666
// 10 -> 9666
// 11 -> 10666

const n = Number(input);
let cnt = 0;

for(let i = 0; ; i++) {
  if(cnt === n) {
    console.log(i - 1);
    break;
  }

  if(String(i).includes("666")) {
    cnt++;
  }
}