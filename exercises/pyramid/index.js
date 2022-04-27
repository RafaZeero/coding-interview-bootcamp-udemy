// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/*
n1 = 1
n2 = 3
n3 = 5
n4 = 7
n5 = 9

nx = 2x - 1
*/

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let spaces = new Array(n - 1 - i).fill(' ').join('')
    let blocks = new Array(i * 2 + 1).fill('#').join('')
    console.log(spaces + blocks + spaces)
  }
}

module.exports = pyramid

// Answer 1
// const baseLength = 2 * n - 1
//   const center = Math.floor(baseLength / 2)

//   for (let row = 0; row < n; row++) {
//     let level = ''

//     for (let col = 0; col < baseLength; col++) {
//       if (center - row <= col && center + row >= col) level += '#'
//       else level += ' '
//     }
//     console.log(level)
//   }

// Answer 2
// function pyramid(n, row = 0, level = '') {
//   if (n === row) return

//   if (2 * n - 1 === level.length) {
//     console.log(level)
//     return pyramid(n, ++row)
//   }
//   const center = Math.floor((2 * n - 1) / 2)
//   let temp

//   if (center - row <= level.length && center + row >= level.length) temp = '#'
//   else temp = ' '

//   pyramid(n, row, level + temp)
// }

// Answer 3
// function pyramid(n) {
//   for (let i = 0; i < n; i++) {
//     let spaces = new Array(n - 1 - i).fill(' ').join('')
//     let blocks = new Array(i * 2 + 1).fill('#').join('')
//     console.log(spaces + blocks + spaces)
//   }
// }
