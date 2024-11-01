const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, ...nums] = input;
const numbers = nums.map(Number);

const solution = (n, numbers) => {
  const stack = [];
  let answer = "";
  let count = 1;

  for(let i = 0; i < n; i++) {
    const num = numbers.shift();

    while(count <= num) {
      stack.push(count++);
      answer += "+ ";
    }

    const popedNum = stack.pop();
    if(popedNum !== num) {
      return 'NO';
    }
    answer += "- ";
  }

  return answer.split(" ").join("\n");
}

const answer = solution(n, numbers);
console.log(answer);