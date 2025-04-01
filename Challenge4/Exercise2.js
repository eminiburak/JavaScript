class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); 

console.log(queue.dequeue()); 
queue.print();

console.log(queue.front());
console.log(queue.size()); 
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
console.log(queue.dequeue()); 
