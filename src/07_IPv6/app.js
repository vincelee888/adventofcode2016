const isAbba = (input) => {
  const [a, b, c, d] = input.split('')
  return a === d &&
         b === c &&
         a !== b
}

const supportsTLS = (input) => {
  const hypernetSeqRegex = /\[([a-zA-Z])*\]/g
  let hypernetSeqs = hypernetSeqRegex.exec(input)
  while (hypernetSeqs !== null) {
    console.log(hypernetSeqs[0])
    hypernetSeqs = hypernetSeqRegex.exec(input)
  }
  console.log(hypernetSeqs)
  for (let i = 0; i <= input.length - 4; i++) {
    const underTest = input.substr(i, 4)
    if (isAbba(underTest)) {
      return true
    }
  }
  return false
}

module.exports = { isAbba, supportsTLS }
