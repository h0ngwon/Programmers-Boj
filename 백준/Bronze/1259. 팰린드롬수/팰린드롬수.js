const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 0;

while(true) {
  if(input[i] == '0') break;

  let str = input[i];
  let reverseStr = str.split('').reverse().join('');

  if(str === reverseStr) console.log('yes');
  else console.log('no');

  i++;
}