class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// module.exports = 
class LinkedList {
    constructor(array) {
        this.head = null;
        this.size = 0;

        if (!array) {
            return;
        } else {
            let list = new LinkedList();
            for (let i = array.length - 1; i >= 0; i--) {
                list.addFirst(array[i]);
            }
            return list;
        }
    }

    addFirst(value) {
        if (value instanceof Array) {
            this.#addArrayFirst(value);
        } else {
            this.head = new Node(value, this.head);
            this.size++;
        }
        return this;
    }

    #addArrayFirst(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            this.head = new Node(array[i], this.head);
            this.size++
        }
        return this;
    }

    addLast(value) {
        let current = this.head;
        if (value instanceof Array) {
            this.#addArrayLast(value);
        } else {
            let newNode = new Node(value)
            if (!current) {
                this.head = newNode;
            } else {
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
            this.size++
        }
        return this;
    }

    #addArrayLast(array) {
        for (let i = 0; i < array.length; i++) {
            let current = this.head;
            let newNode = new Node(array[i])
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
        return this;
    }

    addAtIndex(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error(`Index must be between 0 and ${this.size}`);
        };
        if (index === 0) {
            this.addFirst(value);
        } else if (index === this.size) {
            this.addLast(value);
        } else if (value instanceof Array) {
            this.#addArrayAtIndex(value, index)
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
            this.size++
        }
        return this;
    }

    #addArrayAtIndex(array, index) {
        let previousNode; // Node that goes before array
        let nextNode = this.head; // Node that goes after
        let counter = 0;
        // Loop through nodes until nextNode is at index
        while (counter < index) {
            previousNode = nextNode;
            nextNode = previousNode.next;
            counter++
        }
        // Point previousNode to first array element
        for (let i = 0; i < array.length; i++) {
            let newNode = new Node(array[i])
            newNode.next = nextNode;
            previousNode.next = newNode;
            previousNode = newNode;
            this.size++
        }
        return this;
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

    deleteDuplicates() {
        // sets current node to be head; of list
        let current = this.head;
        // runs until we are at the end of the list
        while (current !== null && current.next !== null) {
            // checks to see if the current value and the next value are the same
            if (current.value === current.next.value) {
                // skips over the duplicate and the next value becomes 2x next
                current.next = current.next.next
                this.size--;
                // current value and the next value are not the same
            } else {
                // moves to the next node on the list to run through the while again
                current = current.next
            }

        }
        // returns the linked list with no duplicates
        return this;
    };

    print() {
        if (!this.head) {
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

    mergeTwoLists(list1, list2) {
        let previousNode; // Node to go before inserted node
        let nextNode = list1.head; // Node to go after inserted node
        let insertNode = list2.head; // Node to be inserted from list2 into list1
        while (insertNode) {
            console.log('here')
            if (!nextNode.next) {
                while (insertNode) {
                    nextNode.next = insertNode;
                    insertNode = insertNode.next;
                    this.size++;
                }
            } else {
                // Loop through list1 until you find insert index
                while (nextNode.value < insertNode.value) {
                    previousNode = nextNode;
                    nextNode = nextNode.next;
                }
                // Save next node in list 2
                let nextInsertNode = insertNode.next
                // Insert node becomes head of list1
                if (!previousNode) {
                    list1.addFirst(insertNode.value);
                } else {
                    // Point previousNode node in list1 to inserted node from list2
                    previousNode.next = insertNode;
                    // Point inserted node to next node in list1
                    insertNode.next = nextNode;
                    // Inserted node is now previousNode node
                    previousNode = insertNode;
                    this.size++;
                }
                // Look at next node in list2
                insertNode = nextInsertNode;
            }
        }
        return list1;
    };
};

let list1 = new LinkedList([1, 2, 4]);
let list2 = new LinkedList([0, 1, 2]);
list1.mergeTwoLists(list1, list2)
console.log(list1.print())
// list.addFirst(15);
// list.addLast(35);
// list.addFirst(5);
// list.addAtIndex([1, 2, 3], 2);
// list.addLast(45);
// list.addAtIndex(25, 3);
// console.log(list.removeAtIndex(4));
// console.log(list.print());
