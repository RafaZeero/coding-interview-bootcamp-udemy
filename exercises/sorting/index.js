// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //Added '-1'
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tempArr = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tempArr
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i

    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (min !== i) {
      let temp = arr[min]
      arr[min] = arr[i]
      arr[i] = temp
    }
  }
  return arr
}

function mergeSort(arr) {
  if (arr.length === 1) return arr

  const midPoint = Math.floor(arr.length / 2)
  const leftSide = arr.slice(0, midPoint)
  const rightSide = arr.slice(midPoint)

  return merge(mergeSort(leftSide), mergeSort(rightSide))
}

function merge(left, right) {
  const finalMerge = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      finalMerge.push(left.shift())
    } else {
      finalMerge.push(right.shift())
    }
  }

  return [...finalMerge, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
