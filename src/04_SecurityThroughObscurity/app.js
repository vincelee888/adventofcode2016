const isValid = ({ letters, checksum }) => {
  const getCounts = (letters) => {
    const counts = []
    letters
      .forEach((l) => {
        const match = counts.filter((c) => c.char === l)
        if (match.length === 1) {
          match[0].count++
        } else {
          counts.push({ char: l, count: 1 })
        }
      })
    return counts
  }

  const sortByCountThenAlpha = (a, b) => {
    if (b.count < a.count) return -1
    if (b.count > a.count) return 1
    if (b.char > a.char) return -1
    if (b.char < a.char) return 1
    return 0
  }

  const sorted = getCounts(letters)
    .sort(sortByCountThenAlpha)

  return checksum.split('')
    .map((el, i) => el !== sorted[i].char)
    .filter((v) => v).length === 0
}

const parse = (input) => {
  const split = input.split('[')
  const checksum = split[1].substring(0, split[1].length - 1)
  const parts = split[0].split('-')
  const sectorId = parseInt(parts.pop())
  const letters = parts.join('').split('')
  return { letters, sectorId, checksum }
}

const sumValidSectorIds = (input) => {
  if (input === undefined) return 0
  return input
    .split('\n')
    .map((l) => parse(l.trim()))
    .filter(isValid)
    .reduce((a, b) => {
      return a + b.sectorId
    }, 0)
}

const shift = (char, charsToShift) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const currIndex = alphabet.indexOf(char)
  charsToShift = charsToShift % alphabet.length
  return currIndex + charsToShift > alphabet.length - 1
    ? alphabet.charAt(currIndex + charsToShift - alphabet.length)
    : alphabet.charAt(currIndex + charsToShift)
}

module.exports = { sumValidSectorIds, shift }
