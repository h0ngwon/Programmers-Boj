// 큐로 구현
// 1. shift로 맨 위 버림
// 2. shift하고 push로 배열에 다시 넣음
// 3. 마지막으로 남을때까지 반복

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DDL {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}

		this.tail = newNode;
		this.length++;

		return newNode;
	}

	getHead() {
		return this.head.value;
	}

	removeHead() {
		this.head = this.head.next;
		this.head.prev = null;
		this.length--;
	}

	getSize() {
		return this.length;
	}
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const list = new DDL();
const n = Number(input);

for (let i = 1; i <= input; i++) {
	list.push(i);
}

for (;;) {
	if (list.getSize() === 1) break;

	list.removeHead();
	list.push(list.getHead());
	list.removeHead();
}

console.log(list.getHead());
