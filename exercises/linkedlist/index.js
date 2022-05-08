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

  removeFirst() {
    return (this.head = this.head.next)
  }

  removeLast() {
    if (!this.head) return
    if (!this.head.next) return (this.head = null)

    let prevNode = this.head
    let node = this.head.next
    while (node.next) {
      prevNode = node
      node = node.next
    }
    prevNode.next = null
  }
}

module.exports = { Node, LinkedList }

// GetLast Answer
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

// RemoveFirst Answer
// removeFirst(){
//   if(!this.head) return

//   this.head = this.head.next

//   return this.head
// }
