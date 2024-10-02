const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

for(let i = 1; i <= n; i++) {
  let sum = i;
  
  let strNum = String(i).split('');
  for(let j = 0; j < strNum.length; j++) {
    sum += Number(strNum[j]);
  }

  if(sum == n) {
    console.log(i);
    return;
  }
}

console.log(0);