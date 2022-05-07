// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(data) {
    this.head = new Node(data, this.head)
  }
  size() {
    let size = 0
    let node = this.head

    while (node) {
      size++
      node = node.next
    }
    return size
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head

    while (node.next) {
      node = node.next
    }
    return node
  }
  clear() {
    this.head = null
  }
}

module.exports = { Node, LinkedList }

// GetLaste Answer
// getLast(){
//   if(!this.head){
//     return null
//   }

//   let node = this.head

//   while(node){
//     if(!node.next){
//       return node
//     }
//     node = node.next
//   }
// }
