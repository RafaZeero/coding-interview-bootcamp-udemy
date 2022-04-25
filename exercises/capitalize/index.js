// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') result += str[i].toUpperCase()
    else result += str[i]
  }

  return result
}

module.exports = capitalize

// Answer 1
// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(word => word.substr(0, 1).toUpperCase().concat(word.substr(1)))
//     .join(' ')
// }

// Answer 2
// function capitalize(str) {
//   const words = []
//   str.split(' ').forEach(word => {
//     words.push(word[0].toUpperCase() + word.slice(1))
//   })
//   return words.join(' ')
// }

// Answer 3
// function capitalize(str) {
//   const words = []
//   for (word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//   return words.join(' ')
// }

// Answer 4
// function capitalize(str) {
//   let result = str[0].toUpperCase()

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') result += str[i].toUpperCase()
//     else result += str[i]
//   }

//   return result
// }
