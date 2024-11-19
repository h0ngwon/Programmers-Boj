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

		if (parentIndex >= 0 && this.heap[index] > this.heap[parentIndex]) {
			[this.heap[index], this.heap[parentIndex]] = [
				this.heap[parentIndex],
				this.heap[index],
			];
			this.heapifyUp(parentIndex);
		}
	}

	heapifyDown(index) {
		const len = this.heap.length;
		const leftChild = index * 2 + 1;
		const rightChild = index * 2 + 2;
		let largest = index;

		if (leftChild < len && this.heap[leftChild] > this.heap[largest]) {
			largest = leftChild;
		}

		if (rightChild < len && this.heap[rightChild] > this.heap[largest]) {
			largest = rightChild;
		}

		if (largest !== index) {
			[this.heap[index], this.heap[largest]] = [
				this.heap[largest],
				this.heap[index],
			];
			this.heapifyDown(largest);
		}
	}

	insert(value) {
		this.heap.push(value);
		this.heapifyUp(this.heap.length - 1);
	}

	extractMax() {
		const max = this.heap[0];
		const lastIndex = this.heap.length - 1;
		this.heap[0] = this.heap[lastIndex];
		this.heap.pop();
		this.heapifyDown(0);

		return max;
	}
}

const maxHeap = new Heap();
const answer = [];

for (let i = 0; i < n; i++) {
	if (arr[i] !== 0) {
		maxHeap.insert(arr[i]);
	} else {
		const max = maxHeap.extractMax();
		answer.push(max || 0);
	}
}

console.log(answer.join("\n"));