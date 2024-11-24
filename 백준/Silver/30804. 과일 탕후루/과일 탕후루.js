const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let n = Number(input.shift());
const arr = input.shift().split(" ").map(Number);
const map = {};
let left = 0;
let answer = 0;

for (let right = 0; right < n; right++) {
	map[arr[right]] = (map[arr[right]] || 0) + 1;

	while (Object.keys(map).length > 2) {
		map[arr[left]] -= 1;
		if (map[arr[left]] === 0) {
			delete map[arr[left]];
		}
		left++;
	}

	answer = Math.max(answer, right - left + 1);
}

console.log(answer);