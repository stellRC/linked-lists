const LOCAL_STORAGE_KEY = 'Lists';
// const LOCAL_STORAGE_SELECTED_ID_KEY = 'Lists.selectedId';
let Lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
// let selectedId = localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY);

// localStorage.clear()
class LinkedLists {

    constructor(value) {
        this.value = value
    }

    append(value) {
        // adds new node to end of list
        Lists.push(this.value)
    }
    prepend(value) {
        // adds new node to start of list
        Lists.unshift(this.value)
        
        
    }
    size() {
        // returns total number of nodes in list
        return Lists.length
    }
    head() {
        // returns first node in list
    }
    tail() {
        // returns last node in list
    }
    at(index) {
        // returns node at given index
    }
    pop() {
        // removes last element from list
    }
    contains(value) {
        // returns true if value is in list, otherwise false
    }
    find(value) {
        // returns index of node containing value, or nil
    }
    toString() {
        // turns object into string for print and preview in console
        // ( value ) -> ( value ) -> ( value ) -> null

       

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Lists));
        // localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY, selectedId);
        console.log(localStorage)
    }
    insertAt(value, index) {
        // insert new node with value at index
    }
    removeAt(index) {
        // remove node at given index
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}


const node1 = new LinkedLists('dog')
const node2 = new LinkedLists('cat')
const node3 = new LinkedLists('bird')



// console.log(node1.append('dino'))
// console.log(node1.toString())
// console.log(node2.append())
// console.log(node2.toString())
// console.log(node3.prepend())
// console.log(node3.toString())
// console.log(node3.size())