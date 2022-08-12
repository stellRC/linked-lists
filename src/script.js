import NodeObject from "./node.js";
import LinkedList from "./linked.js";

let firstNode = new NodeObject(1);
let nodeList = new LinkedList(firstNode);

console.log("Head: ", nodeList.getHead());
// (1)

console.log("Append Node 3: ", nodeList.append(3));
// (1) => (3)

console.log("Prepend Node 4: ", nodeList.prepend(4));
// (4) => (1) => (3)

console.log("Append Node 5: ", nodeList.append(5));
// (4) => (1) => (3) => (5)

console.log("Insert 8 At 2: ", nodeList.insertAt(8, 2));
// (4) => (8) => (1) => (3) => (5)

console.log("Insert 9 At 3: ", nodeList.insertAt(9, 3));
// (4) => (8) => (9) => (1) => (3) => (5)

console.log("Remove 3: ", nodeList.removeAt(3));
// (4) => (8) => (1) => (3) => (5)

console.log("Head: ", nodeList.getHead());
// (4) => (8) => (1) => (3) => (5)

console.log("Pop: ", nodeList.pop());
// (4) => (8) => (1) => (3)

console.log("Tail: ", nodeList.getTail());
// (3)

console.log("At Index 2: ", nodeList.at(2));
// (8)

console.log("contains 1: ", nodeList.contains(1));
// True

console.log("contains 12: ", nodeList.contains(12));
// False

console.log("find 4: ", nodeList.find(4));
// (1)

console.log("String: ", nodeList.toString());
// (4) => (8) => (1) => (3) => null

console.log("Size", nodeList.size());
// 4

console.log("String Count", nodeList.count());
// 4
