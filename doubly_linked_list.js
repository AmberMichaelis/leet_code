class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            newNode.next = newNode;
            newNode.previous = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head.next;
            newNode.previous = this.head;
            this.head.next = newNode;
            newNode.next.previous = newNode;
            newNode.value = this.head.value;
            this.head.value = value;
        }
        this.size++;
        return this.head;
    }

    addLast(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            newNode.next = newNode;
            newNode.previous = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head.next;
            newNode.previous = this.head;
            this.head.next = newNode;
            newNode.next.previous = newNode;
            newNode.value = this.head.value;
            this.head.value = value;
            this.head = newNode;
        }
        this.size++;
        return this.head;
    }

    addAtIndex(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error(`Index must be between 0 and ${this.size}`)
        } else if (index === 0) {
            this.addFirst(value);
        } else if (index === this.size) {
            this.addLast(value);
        } else {
            let newNode = new Node(value);
            let counter = 0;
            let nextNode = this.head; // node to go after inserted node
            while (nextNode && counter < index) {
                nextNode = nextNode.next;
                counter++;
            }
            let previousNode = nextNode.previous // node to go before inserted node
            newNode.next = nextNode;
            previousNode.next = newNode;
            newNode.previous = previousNode;
            nextNode.previous = newNode
            this.size++;
        }
        return this.head;
    }

    removeFirst() {
        let firstNode = this.head;
        if (!firstNode.next) {
            firstNode.next = null;
            firstNode.previous = null;
            this.head = null;
            this.size = 0;
        } else {
            let secondNode = firstNode.next;
            let thirdNode = secondNode.next;
            // Put second node's value into head
            firstNode.value = secondNode.value;
            // Point head node next to third node
            firstNode.next = thirdNode;
            // Point third node previous to head
            thirdNode.previous = firstNode;
            this.size--;
        }
        return firstNode;
    }

    removeLast() {
        let firstNode = this.head;
        let lastNode = firstNode.previous;
        let secondFromLastNode = lastNode.previous;
        let thirdFromLastNode = secondFromLastNode.previous;
        // Put second from last node's value into last node
        lastNode.value = secondFromLastNode.value;
        // Point third from last node to last node
        thirdFromLastNode.next = lastNode;
        // Point last node previous to third from last node
        lastNode.previous = thirdFromLastNode;
        this.size--;
        return firstNode;
    }

    removeAtIndex(index) {
        if (index < 0 || index > this.size) {
            throw new Error(`Index must be between 0 and ${this.size}`)
        } else if (index === 0) {
            this.removeFirst();
        } else if (index === this.size) {
            this.removeLast();
        } else {
            let removeNode = this.head; // node to be removed
            let counter = 0;
            while (removeNode && counter < index) {
                removeNode = removeNode.next;
                counter++;
            }
            let nextNode = removeNode.next; // node after removed node
            let previousNode = removeNode.previous // node before removed node
            previousNode.next = nextNode;
            nextNode.previous = previousNode;
            this.size--;
        }
        return this.head;
    }

    clear() {
        if (!this.head) {
            return this.head;
        } else if (this.size === 1) {
            this.removeFirst();
        } else {
            let current = this.head;
            this.print()
            while (current) {
                current = current.next;
                this.removeFirst();
                this.print()
            }
            this.removeFirst();
            return this.head;
        }
    }

    print() {
        if (!this.head) {
            return;
        } else {
        let current = this.head;
        let printedList = `${current.value}`
        while (current.next && current.next !== this.head) {
            current = current.next;
            printedList += ` -> ${current.value}`;
        }
        printedList += ` | Size: ${this.size}`
        return console.log(printedList);
    }
    }

    printDetails() {
        let current = this.head;
        if (!current) {
            return;
        } else if (!current.next) {
            console.log(`head value: ${current.value} | Size: ${this.size}`)
        } else {
            let index = 0;
            console.log(`Size: ${this.size}`)
            console.log(`node: ${index} | value: ${current.value} | previous: ${current.previous.value} | next: ${current.next.value}`)
            while (current.next !== this.head) {
                current = current.next;
                index++
                console.log(`node: ${index} | value: ${current.value} | previous: ${current.previous.value} | next: ${current.next.value}`)
            }
        }
    }
}

let list = new DoublyLinkedList();
list.addFirst(30);
list.addFirst(20);
list.addFirst(15);
// list.addFirst(10);
// list.addAtIndex(25, 3);
// list.addFirst(5);
list.clear();
list.print();
// list.printDetails();
