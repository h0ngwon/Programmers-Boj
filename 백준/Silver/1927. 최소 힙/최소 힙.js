const [n, ...arr] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map(Number);

class Heap {
	constructor() {
		this.heap = [];
	}

	heapifyUp(index) {
		const parentIndex = Math.floor((index - 1) / 2);

		if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
			[this.heap[index], this.heap[parentIndex]] = [
				this.heap[parentIndex],
				this.heap[index],
			];
			this.heapifyUp(parentIndex);
		}
	}

	heapifyDown(index) {
		const len = this.heap.length;
		const leftIndex = 2 * index + 1;
		const rightIndex = 2 * index + 2;
		let smallest = index;

		if (leftIndex < len && this.heap[leftIndex] < this.heap[smallest]) {
			smallest = leftIndex;
		}

		if (rightIndex < len && this.heap[rightIndex] < this.heap[smallest]) {
			smallest = rightIndex;
		}

		if (smallest !== index) {
			[this.heap[smallest], this.heap[index]] = [
				this.heap[index],
				this.heap[smallest],
			];
			this.heapifyDown(smallest);
		}
	}

	insert(value) {
		this.heap.push(value);
		this.heapifyUp(this.heap.length - 1);
	}

	extractMin() {
		if (this.heap.length === 0) {
			return null;
		}

		const min = this.heap[0];
		const lastIndex = this.heap.length - 1;
		this.heap[0] = this.heap[lastIndex];
		this.heap.pop();
		this.heapifyDown(0);

		return min;
	}
}

const minHeap = new Heap();
const answer = [];

for (let i = 0; i < n; i++) {
	const x = arr[i];

	if (x !== 0) {
		minHeap.insert(x);
	} else {
		const min = minHeap.extractMin() || 0;
		answer.push(min);
	}
}

console.log(answer.join("\n"));