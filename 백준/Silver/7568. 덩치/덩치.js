//x는 몸무게 y는 키 (x,y)
// A: (x, y) , B: (p, q) x > p y > q 면 A가 큼

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
let arr = [];
let result = [];
for(let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ");
  arr.push([Number(x),Number(y)]);
}

let rank = 1;

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
      rank++;
    }
  }
  result.push(rank);
  rank = 1;
}

console.log(result.join(" "))