class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// module.exports = 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addFirst(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    addLast(value) {
        let newNode = new Node(value)
        let current = this.head;
        if (current === null) {
            this.head = newNode;
        } else {
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++
    }

    addAtIndex(value, index) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.addFirst(value);
        } else {
            let newNode = new Node(value)
            let previousNode;
            let nextNode = this.head;
            let counter = 0;
            while (counter < index) {
                previousNode = nextNode;
                nextNode = previousNode.next;
                counter++
            }
            newNode.next = nextNode;
            previousNode.next = newNode;
        }
        this.size++
    }

    getAtIndex(index) {
        if (index === 0) return this.head.value;
        if (index > this.size || index < 0) return `Select an index between 0 and ${this.size - 1}.`
        let current = this.head;
        let counter = 0;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current.value;
    }

    clearList() {
        this.head = null;
        this.size = 0
    }

    removeFirst() {
        if (this.head == null) return 'List is empty';
        let removedHead = this.head;
        this.head = this.head.next;
        this.size--;
        return removedHead.value;
    }

    removeLast() {
        let current = this.head;
        // Empty list
        if (current == null) return 'List is empty';
        // Only one node in list
        if (current.next == null) {
            let removedTail = this.head;
            this.head = null;
            return removedTail;
        }
        let removedTail;
        while (current.next.next != null) {
            removedTail = current.next.next;
            current = current.next;
        }
        current.next = null;
        this.size--;
        return removedTail.value;
    }

    removeAtIndex(index) {
        if (index >= this.size || index < 0) return `Select an index between 0 and ${this.size - 1}.`;
        if (index === 0) {
            return this.removeFirst();
        } else if (index === this.size - 1) {
            return this.removeLast();
        } else {
            let previousNode;
            let current = this.head;
            let counter = 0;
            while (counter < index) {
                previousNode = current;
                current = current.next;
                counter++
            }
            previousNode.next = current.next
            this.size--;
            return current.value;
        }
    }

    buildFromArray(array) {
        let tail, eachNode;
        for (let i = array.length - 1; i >= 0; i--) {
            if (!tail) {
                tail = new Node(array[i]);
                console.log('inside')
            }
            console.log(array[i])
        }
    }

    print() {
        if (this.head == null) {
            return 'List is empty'
        } else {
            let current = this.head;
            let printedList = `Linked List: ${current.value}`;
            while (current.next) {
                current = current.next;
                printedList += ` -> ${current.value}`;
            }
            printedList += ` | Size: ${this.size}`
            return printedList
        }
    }
}

let list = new LinkedList();
list.buildFromArray([1, 2, 3]);
// list.addFirst(35);
// list.addFirst(15);
// list.addFirst(5);
// list.addLast(45);
// list.addAtIndex(25, 2);
// console.log(list.removeAtIndex(4));
// console.log(list.print());
