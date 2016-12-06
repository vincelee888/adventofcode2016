const getCounts = (letters) => {
  const counts = []
  letters
    .forEach((l) => {
      const match = counts.filter((c) => c.char === l)
      if (match.length === 1) {
        match[0].priority++
      } else {
        counts.push({ char: l, priority: 1 })
      }
    })
  return counts
}

const sortByCountThenAlpha = (a, b) => {
  if (b.priority < a.priority) return -1
  if (b.priority > a.priority) return 1

  return b.char < a.char
}

const isValid = ({ letters, checksum }) => {
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
    .filter((e) => isValid(e))
    .reduce((a, b) => {
      return a + b.sectorId
    }, 0)
}

module.exports = { sumValidSectorIds }
