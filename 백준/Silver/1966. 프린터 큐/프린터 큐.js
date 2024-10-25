const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const t = Number(input.shift());

const solution = (t, input) => {
  let result = [];

  for(let i = 0; i < t; i++) {
    let [n, m] = input.shift().split(" ").map(Number);
    let priority = input.shift().split(" ").map(Number);
    let cnt = 1;

    while(true) {
      let max = Math.max(...priority);
      let cur = priority.shift();

      if(cur >= max && m === 0) {
        result.push(cnt);
        break;
      }else if(cur < max && m === 0) {
        priority.push(cur);
        m = priority.length - 1;
      }else if(cur >= max) {
        cnt += 1;
        m -= 1;
      }else if(cur < max) {
        priority.push(cur);
        m -=1;
      }
    }
  }
  console.log(result.join('\n'));
}

solution(t, input);