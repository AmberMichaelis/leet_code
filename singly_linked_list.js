class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// module.exports = 
class SinglyLinkedList {
    constructor(array) {
        this.head = null;
        this.size = 0;

        if (!array) {
            return;
        } else {
            let list = new SinglyLinkedList();
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

    mergeTwoLists(l1, l2) {
        if (!l1 || l1.size === 0) return l2;
        if (!l2 || l2.size === 0) return l1;

        list1 = l1.head.value <= l2.head.value ? l1 : l2;
        list2 = list1 === l1 ? l2 : l1;
        let index = 0;
        let previousNode; // Node to go before insert
        let nextNode = list1.head; // Node to go after insert
        let insertNode = list2.head; // Node to be inserted from list2 into list1

        if (!previousNode && insertNode.value === nextNode.value) {
            let nextInsertNode = insertNode.next;
            insertNode.next = nextNode;
            list1.head = insertNode;
            list1.size++;
            list2.size++;
            previousNode = insertNode;
            insertNode = nextInsertNode;
            index++;
        }
        
        while (insertNode) {
            let nextInsertNode = insertNode.next;
            while (nextNode && nextNode.value < insertNode.value) {
                previousNode = nextNode;
                nextNode = nextNode.next;
                index++;
            }
            list1 = list1.addAtIndex(insertNode.value, index);
            list2.size++;
            previousNode = previousNode.next;
            insertNode = nextInsertNode;
            index++;

        }
        return list1;
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
};

let list1 = new SinglyLinkedList([]);
let list2 = new SinglyLinkedList([]);
list1.addAtIndex(1,0)
list1.addAtIndex(3,1)
list1.addAtIndex(5,2)
list2.addAtIndex(1,0)
list2.addAtIndex(2,1)
list2.addAtIndex(4,2)
list1.mergeTwoLists(list1, list2)
console.log(list1.print());
console.log(list2.print());
