const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [n, l] = input.split(" ").map(Number); 
const result = [];

while(true) {
  let min = Math.floor(n/l) - Math.floor((l-1) / 2);

  if(min < 0 || l > 100) {
    result.push(-1);
    break;
  }

  let sum = l * (min * 2 + (l - 1)) / 2;

  if(sum === n) {
    for(let i = 0; i < l; i++) {
      result.push(min + i)
    }
    break;
  }
  l++;
}

console.log(result.join(" "));