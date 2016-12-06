const isValidTriangle = ([a, b, c]) => {
  return a + b > c
}

const parseLine = (line) => {
  return line
    .trim()
    .split(/\s+/)
    .map((x) => parseInt(x))
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

module.exports = (values) => {
  if (values === undefined) return 0
  return parse(values)
}
