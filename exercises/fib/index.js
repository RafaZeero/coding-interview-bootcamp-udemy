// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const result = [0, 1]

  for (let i = 2; i <= n; i++) {
    const lastElement = result[i - 1]
    const beforeLastElement = result[i - 2]

    result.push(lastElement + beforeLastElement)
  }

  return result[result.length - 1]
}

module.exports = fib

// Answer 1 --> Runtime complexity O(tooBIG!!!)
// function fib(n) {
//   if (n <= 0) return 0
//   if (n === 1) return 1
//   let result = fib(n - 1) + fib(n - 2)

//   return result
// }

// Answer 2 --> Runtime complexity O(n) Linear
// function fib(n) {
//   const result = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     const lastElement = result[i - 1]
//     const beforeLastElement = result[i - 2]

//     result.push(lastElement + beforeLastElement)
//   }

//   return result[result.length - 1]
// }

// Answer 1 --> Runtime complexity O(tooBIG!!!)
// function fib(n) {
//   if (n < 2 ) return n
//   let result = fib(n - 1) + fib(n - 2)
//   return result
// }
