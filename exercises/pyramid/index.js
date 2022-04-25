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

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let pyramid = ''
    for (let col = 0; col < n; col++) {
      pyramid += ' '.repeat(n - 1)
      pyramid += '#'.repeat(row + 1)
      pyramid += ' '.repeat(n - 1)
    }
    console.log(pyramid)
  }
}

module.exports = pyramid
