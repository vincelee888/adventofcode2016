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

const getLeastOccurringCharacter = (counts) => {
  const chars = Object.keys(counts)
  return chars.sort((a, b) => {
    return counts[b] - counts[a]
  })[chars.length - 1]
}

const getCharacterInColumn = (rows, column, sortingFunction = getMostOccurringCharacter) => {
  const charsInColumn = getCharsInColumn(rows, column)
  const counts = getCounts(charsInColumn)
  return sortingFunction(counts)
}

const getCode = (input, getCharFunction = getMostOccurringCharacter) => {
  const rows = input.split('\n')
  let result = ''
  const totalLetters = rows[0].trim().length
  for (let column = 0; column < totalLetters; column++) {
    result += getCharacterInColumn(rows, column, getCharFunction)
  }

  return result
}

const getRealCode = (input) => {
  return getCode(input, getLeastOccurringCharacter)
}

module.exports = { getCode, getRealCode }
