const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input.shift();
const arr1 = input.shift().split(" ")
const m = input.shift();
const arr2 = input.shift().split(" ")

let result = [];
let nSet = new Set(arr1);

arr2.forEach(e => {
  if(nSet.has(e)) {
    return result.push(1);
  }else return result.push(0);
});

console.log(result.join("\n"))