// 1. 숫자가 0일때 stack pop
// 2. 숫자가 0이 아니면 stack push
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input.shift();
let arr = [];

for(let i = 0; i < input.length; i++) {
  let num = Number(input[i]);

  if(num === 0) {
    arr.pop();
  }else arr.push(num);
}

if(arr.length === 0) console.log(0);
else {
  let sum = arr.reduce((acc, cur) => acc + cur);
  console.log(sum);
}