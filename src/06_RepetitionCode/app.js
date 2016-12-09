const getCharsInColumn = (rows, index) => {
  return rows
    .reduce((a, b) => {
      return a + b.trim().charAt(index)
    }, '')
}

const getCounts = (string) => {
  const counts = {}
  for (let char of string.split('')) {
    counts[char] = counts[char] === undefined
      ? 1
      : counts[char] + 1
  }
  return counts
}

const getMostOccurringCharacter = (counts) => {
  return Object.keys(counts).sort((a, b) => {
    return counts[b] - counts[a]
  })[0]
}

const getMostOccurringCharacterInColumn = (rows, column) => {
  const charsInColumn = getCharsInColumn(rows, column)
  const counts = getCounts(charsInColumn)
  return getMostOccurringCharacter(counts)
}

const getCode = (input) => {
  const rows = input.split('\n')
  let result = ''
  const totalLetters = rows[0].trim().length
  for (let column = 0; column < totalLetters; column++) {
    result += getMostOccurringCharacterInColumn(rows, column)
  }

  return result
}

module.exports = { getCode }
