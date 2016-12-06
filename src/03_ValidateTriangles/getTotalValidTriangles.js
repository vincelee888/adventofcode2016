const isValidTriangle = ([a, b, c]) => {
  return a + b > c
}

const parseLine = (line) => {
  return line
    .trim()
    .split(/\s+/)
    .map((x) => parseInt(x))
    .sort((a, b) => {
      return a - b
    })
}

const parse = (values) => {
  return values
    .split('\n')
    .reduce((acc, cur) => {
      const [a, b, c] = parseLine(cur)
      return isValidTriangle([a, b, c])
        ? acc + 1
        : acc
    }, 0)
}

const horizontal = (values) => {
  if (values === undefined) return 0
  return parse(values)
}

const vertical = (values) => {
  const array = values
    .split('\n')
    .map((l) => l.trim().split(/\s+/))

  const converted = []

  for (let row = 0; row < array.length; row += 3) {
    for (let col = 0; col < 3; col++) {
      converted.push([array[row][col], array[row + 1][col], array[row + 2][col]])
    }
  }

  const asString = converted
    .map((row) => row.join(' '))
    .join('\n')

  return parse(asString)
}

module.exports = { horizontal, vertical }
