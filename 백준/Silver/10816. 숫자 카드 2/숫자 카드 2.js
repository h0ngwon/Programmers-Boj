// 1. 카드를 Map에 저장
// 2. 만약 Map에 이미 있다면 value + 1
// 3. Map 에 있는 value를 꺼내기

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const cards = input.shift().split(" ").map(Number);
const m = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const cMap = new Map();
let result = [];

for(let i = 0; i < cards.length; i++) {
  if(cMap.has(cards[i])) {
    cMap.set(cards[i], cMap.get(cards[i]) + 1);
  }
  else {
    cMap.set(cards[i], 1)
  }
}

for(let i = 0; i < arr.length; i++) {
  if(cMap.has(arr[i])) {
    result.push(cMap.get(arr[i]));
  }else {
    result.push(0);
  }
}

console.log(result.join(" "));