// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((prev, curr) => curr + prev)
}
module.exports = reverse

//return str.split('').reverse().join('')
// let reversed = ''
//   for (const character of str) {
//     reversed = character + reversed
//   }
//   return reversed
