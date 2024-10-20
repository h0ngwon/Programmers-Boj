// 1. 문자열을 돌면서 괄호를 만날경우 스택에 집어넣는다.
// 2. 문자열을 돌면서 닫힌 괄호를 만날경우 두가지 케이스가 있다.
// 2-1. 닫힌괄호가 소괄호일경우 -> 스택에서 pop한 값이 ) 일경우 continue 아니라면 no를 result 배열에 넣는다.
// 2-2. 닫힌괄호가 대괄호일경우 -> 스택에서 pop한 값이 ] 일경우 continue 아니라면 no를 result 배열에 넣는다.

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let result = [];

for (let i = 0; i < input.length - 1; i++) {
	const word = input[i];
	const p = [];

	for (let j = 0; j < word.length; j++) {
		if (
			word[j] === "(" ||
			word[j] === ")" ||
			word[j] === "[" ||
			word[j] === "]"
		) {
			p.push(word[j]);
		}
	}

	let stack = [];
	let check = false;

	for (let k = 0; k < p.length; k++) {
		if (p[k] === "(" || p[k] === "[") {
			stack.push(p[k]);
		} else if (p[k] === ")" || p[k] === "]") {
			let top = stack.pop() + p[k];
			if (top === "()" || top === "[]") {
				continue;
			} else {
				result.push("no");
				check = true;
				break;
			}
		}
	}

	if (!check) {
		if (stack.length === 0) {
			result.push("yes");
		} else {
			result.push("no");
		}
	}
}

console.log(result.join("\n"));