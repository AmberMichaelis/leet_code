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

    print() {
        let current = this.head;
        let printedList = `${current.value}`
        while (current.next !== this.head) {
            current = current.next;
            printedList += ` -> ${current.value}`;
        }
        return console.log(printedList);
    }

    printDetails() {
        let current = this.head;
        let index = 0;
        console.log(`node: ${index} | value: ${current.value} | previous: ${current.previous.value} | next: ${current.next.value}`)
        while (current.next !== this.head) {
            current = current.next;
            index++
            console.log(`node: ${index} | value: ${current.value} | previous: ${current.previous.value} | next: ${current.next.value}`)
        }
    }
}

let list = new DoublyLinkedList();
list.addFirst(5);
list.addFirst(10);
list.addFirst(15);
list.print()
list.printDetails();
