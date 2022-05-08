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
    if (!this.head) {
      return null
    }

    let node = this.head
    while (node) {
      if (!node.next) {
        return node
      }
      node = node.next
    }
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

  insertLast(data) {
    let lastNode = this.getLast()
    if (lastNode) return (lastNode.next = new Node(data))
    else return (this.head = new Node(data))
  }

  getAt(index) {
    let counter = 0
    let node = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }

    return null
  }

  removeAt(index) {
    if (!this.head) return
    if (index === 0) return (this.head = this.head.next)

    const prevNode = this.getAt(index - 1)
    if (!prevNode.next) return

    prevNode.next = prevNode.next.next
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

// RemoveAT Answer
// removeAt(index) {
//   if (!this.head) {
//     return;
//   }

//   if (index === 0) {
//     this.head = this.head.next;
//     return;
//   }

//   const previous = this.getAt(index - 1);
//   if (!previous || !previous.next) {
//     return;
//   }
//   previous.next = previous.next.next;
// }
