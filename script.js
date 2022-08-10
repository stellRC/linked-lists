 
let stringLength = 0;
let newNode;
let finalNode;
let nextNode;
let firstNode;
let prevNode;
let counter;
let atIndex;

class LinkedList {

    constructor(head = null) {
        this.head = head
    }

    append(value) {
        // adds new node to end of list
        newNode = new NodeObject(value);
        finalNode = this.head;
            while (finalNode.next) {
                finalNode = finalNode.next;
            }
        stringLength++;
        finalNode.next = newNode;
        return newNode
    }

    prepend(value) {
        // adds new node to start of list
        newNode = new NodeObject(value);
        newNode.next = this.head;
        this.head = newNode;
        stringLength++;
        return newNode
        
        
    }

    size() {
        // returns total number of nodes in list
       counter = 1;
       firstNode = this.head;
       while (firstNode.next != null) {
        firstNode = firstNode.next
        counter++;
        }
        return counter
    }

    count() {
        return stringLength
    }

    getHead() {
        // returns first node in list
        return this.head
    }

    getTail() {
        // returns last node in list
        finalNode = this.head
        while(finalNode.next != null) {
            finalNode = finalNode.next
        }
        return finalNode
    }

    at(index) {
        // returns node at given index
        counter = 1;
        atIndex = this.head
        while (counter < index) {
                atIndex = atIndex.next
                counter++
        }
        return atIndex

    }
    pop() {
        // removes last element from list
        finalNode = this.head
        while(finalNode.next != null) {
            prevNode = finalNode;
            finalNode = finalNode.next;
        }
        stringLength--;
        prevNode.next = null;
        Object.setPrototypeOf(finalNode, null);
        return prevNode;
        
    }
    contains(value) {
        // returns true if value is in list, otherwise false
        let nodeValue = this.head
        while (nodeValue.next) {
            if (nodeValue.value === value) return true
            nodeValue = nodeValue.next
        }
        return false
    }
    find(value) {
        // returns index of node containing value, or nil
        let count = 1;
        let nodeValue = this.head;
        let nodeIndex;
        while (nodeValue) {
            if (nodeValue.value === value) {
                nodeIndex = count;
                return nodeIndex
            }
            nodeValue = nodeValue.next
            ++count
        }
        return null
    }
    toString() {
        // turns object into string for print and preview in console
        // ( value ) -> ( value ) -> ( value ) -> null
        let firstNode = this.head
        let nodeString;
        let nodeList = '';
        let nodeValue;
        while (firstNode) {
            if (firstNode.next) {
                nodeValue = firstNode.value
                nodeString = JSON.stringify(nodeValue)
                nodeList += ' ' + '(' + nodeString + ')' + ' =>'
            } else if (firstNode.next === null) {
                nodeValue = firstNode.value
                nodeString = JSON.stringify(nodeValue)
                nodeList += ' ' + '(' + nodeString + ')' 
            }
            firstNode = firstNode.next
    }
    return nodeList
}

    insertAt(value, index) {
        let finalNode = this.head
        let newNode = new NodeObject(value)
        let prevNode;
        let indexCount = 1;
        if (index === 1 || index === 0) {
            newNode.next = finalNode
        } else {
            while (indexCount < index) {
                if (finalNode) {
                    prevNode = finalNode
                    finalNode = finalNode.next
                }
                indexCount++
            } 
            newNode.next = finalNode
            prevNode.next = newNode
        } 
        stringLength++
        return newNode
    }

    removeAt(index) {
        // remove node at given index
        let finalNode = this.head
        let indexCount = 1;
        while (index > indexCount) {
            prevNode = finalNode
            finalNode = finalNode.next
            indexCount++
        }
        
        prevNode.next = finalNode.next
        Object.setPrototypeOf(finalNode,null)

        return prevNode
    }


}

class NodeObject {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let node1 = new NodeObject(1)
let list = new LinkedList(node1)

console.log("Head", list.getHead())
console.log("Append Node", list.append(3))
console.log("Prepend Node", list.prepend(4))
console.log("Append Node", list.append(5))
console.log("Insert At", list.insertAt(8, 2))
console.log("Insert At", list.insertAt(9, 3))
console.log("Remove", list.removeAt(3))
console.log("Head", list.getHead())
console.log("Pop", list.pop())
console.log("Tail", list.getTail())
console.log("At Index", list.at(2))
console.log("contains", list.contains(1))
console.log("find", list.find(4))
console.log("String", list.toString())
console.log("Size", list.size())
console.log("String Count", list.count())

