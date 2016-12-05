module.exports = (values) => {
  let count = 0
  if (values !== undefined && values.length) {
    let [a, b, c] = values
      .split(/\s+/)
      .map((x) => parseInt(x))
    if (a + b > c) { count++ }
  }
  return count
}
