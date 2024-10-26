const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const n = Number(input.shift());
const result = [];
const stack = [];

for (let i = 0; i < n; i++) {
	switch (input[i]) {
		case "front":
			stack[0] ? result.push(stack[0]) : result.push(-1);
			break;
		case "back":
			stack[stack.length - 1]
				? result.push(stack[stack.length - 1])
				: result.push(-1);
			break;
		case "size":
			result.push(stack.length);
			break;
		case "empty":
			stack[0] ? result.push(0) : result.push(1);
			break;
		case "pop":
			stack[0] ? result.push(stack.shift()) : result.push(-1);
			break;
		default:
			const num = Number(input[i].split(" ")[1]);
			stack.push(num);
			break;
	}
}

console.log(result.join("\n"));
