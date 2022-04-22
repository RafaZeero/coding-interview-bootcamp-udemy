// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return helper(stringA) === helper(stringB)
}

function helper(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams

// // answer 1
//   const newStringA = stringA.replace(/[^\w]/g, '').toLowerCase().split('')
//   const newStringB = stringB.replace(/[^\w]/g, '').toLowerCase().split('')

//   if (newStringA.length !== newStringB.length) return false

//   let result = true
//   newStringA.filter(letterStrA => {
//     if (newStringB.includes(letterStrA)) {
//       newStringB.splice(newStringB.indexOf(letterStrA), 1)
//     } else if (!newStringB.includes(letterStrA) || newStringB.length)
//       result = false
//   })

//   return result

// // answer 2
// const charMapStringA = createCharMap(stringA)
//   const charMapStringB = createCharMap(stringB)

//   if (Object.keys(charMapStringA).length !== Object.keys(charMapStringB).length)
//     return false

//   for (let char in charMapStringA) {
//     if (charMapStringA[char] !== charMapStringB[char]) return false
//   }

//   return true
// }

// function createCharMap(str) {
//   const charMap = {}

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] ? charMap[char]++ : (charMap[char] = 1)
//   }
//   return charMap
