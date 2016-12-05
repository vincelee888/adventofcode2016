module.exports = (values) => {
  let count = 0
  if (values !== undefined && values.length) {
    values
      .split('\n')
      .forEach((v) => {
        console.log(v)
        let [a, b, c] = v
          .trim()
          .split(/\s+/)
          .map((x) => parseInt(x))
        if (a + b > c) { count++ }
      })
  }
  return count
}
