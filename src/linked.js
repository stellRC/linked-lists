import NodeObject from "./node.js";

let stringLength = 0;
let newNode;
let firstNode;
let prevNode;
let finalNode;
let nodeList;
let counter;
let atIndex;
let nodeValue;
let nodeString;
let nodeIndex;

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
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
    return newNode;
  }

  prepend(value) {
    // adds new node to start of list
    newNode = new NodeObject(value);
    newNode.next = this.head;
    this.head = newNode;
    stringLength++;
    return newNode;
  }

  size() {
    // returns total number of nodes in list
    counter = 1;
    firstNode = this.head;
    while (firstNode.next != null) {
      firstNode = firstNode.next;
      counter++;
    }
    return counter;
  }

  count() {
    return stringLength;
  }

  getHead() {
    // returns first node in list
    return this.head;
  }

  getTail() {
    // returns last node in list
    finalNode = this.head;
    while (finalNode.next != null) {
      finalNode = finalNode.next;
    }
    return finalNode;
  }

  at(index) {
    // returns node at given index
    counter = 1;
    atIndex = this.head;
    while (counter < index) {
      atIndex = atIndex.next;
      counter++;
    }
    return atIndex;
  }
  pop() {
    // removes last element from list
    finalNode = this.head;
    while (finalNode.next != null) {
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
    nodeValue = this.head;
    while (nodeValue.next) {
      if (nodeValue.value === value) return true;
      nodeValue = nodeValue.next;
    }
    return false;
  }
  find(value) {
    // returns index of node containing value, or nil
    counter = 1;
    nodeValue = this.head;
    while (nodeValue) {
      if (nodeValue.value === value) {
        nodeIndex = counter;
        return nodeIndex;
      }
      nodeValue = nodeValue.next;
      ++counter;
    }
    return null;
  }
  toString() {
    // turns object into string for print and preview in console
    // ( value ) -> ( value ) -> ( value ) -> null
    firstNode = this.head;
    nodeList = "";
    while (firstNode) {
      if (firstNode.next) {
        nodeValue = firstNode.value;
        nodeString = JSON.stringify(nodeValue);
        nodeList += " " + "(" + nodeString + ")" + " =>";
      } else if (firstNode.next === null) {
        nodeValue = firstNode.value;
        nodeString = JSON.stringify(nodeValue);
        nodeList += " " + "(" + nodeString + ")";
      }
      firstNode = firstNode.next;
    }
    return nodeList;
  }

  insertAt(value, index) {
    finalNode = this.head;
    newNode = new NodeObject(value);
    counter = 1;
    if (index === 1 || index === 0) {
      newNode.next = finalNode;
    } else {
      while (counter < index) {
        if (finalNode) {
          prevNode = finalNode;
          finalNode = finalNode.next;
        }
        counter++;
      }
      newNode.next = finalNode;
      prevNode.next = newNode;
    }
    stringLength++;
    return newNode;
  }

  removeAt(index) {
    // remove node at given index
    finalNode = this.head;
    counter = 1;
    while (index > counter) {
      prevNode = finalNode;
      finalNode = finalNode.next;
      counter++;
    }

    prevNode.next = finalNode.next;
    Object.setPrototypeOf(finalNode, null);

    return prevNode;
  }
}
