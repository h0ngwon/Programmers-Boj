// 흰색 시작과 검은색 시작판을 구분해야함
// 8 * 8 로 자른다했으므로 white, black과 비교

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let [size, ...arr] = input;
let [row, col] = size.split(" ");
arr = arr.map((x) => x.split(""));

const answer = [];

const white = [
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
];

const black = [
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
];

const whiteStart = (x, y) => {
	let cnt = 0;

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (arr[x + i][j + y] !== white[i][j]) cnt++;
		}
	}

	return cnt;
};

const blackStart = (x, y) => {
  let cnt = 0;

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (arr[i + x][j + y] !== black[i][j]) cnt++;
		}
	}

	return cnt;
}

for(let i = 0; i < row - 7; i++) {
  for(let j = 0; j < col - 7; j++) {
    answer.push(whiteStart(i, j))
    answer.push(blackStart(i, j))
  }
}

console.log(Math.min(...answer));