// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi) // retorna Array ou Nulo se 0 matches
  return matches ? matches.length : 0
}

module.exports = vowels

// Answer 1
// function vowels(str) {
//   return str
//     .toLowerCase()
//     .split(/[^aeiou]/)
//     .join('').length
// }

// Answer 2
// function vowels(str) {
//   let vowelsValue = 0
//   const vogais = 'aeiou'

//   for (let i of str.toLowerCase()) {
//     if (vogais.includes(i)) vowelsValue++
//   }
//   return vowelsValue
// }
