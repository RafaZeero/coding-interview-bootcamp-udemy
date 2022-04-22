// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strObject = {}
  let max = 0
  let maxChar = ''
  for (let char of str) {
    strObject[char] ? strObject[char]++ : (strObject[char] = 1)
  }

  for (let char in strObject) {
    if (strObject[char] > max) {
      max = strObject[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar

/*
for in -> para Objetos
for (let CHAVE in OBJETO) vai iterar a chave e não o valor, então dá pra usar como : OBJETO[CHAVE]

*/
