// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const tempArr = [root, 'helper']
  const widthCounter = [0]

  while (tempArr.length > 1) {
    const node = tempArr.shift()

    if (node == 'helper') {
      tempArr.push('helper')
      widthCounter.push(0)
    } else {
      tempArr.push(...node.children)
      widthCounter[widthCounter.length - 1]++
    }
  }

  return widthCounter
}

module.exports = levelWidth
