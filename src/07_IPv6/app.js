const isAbba = (input) => {
  const [a, b, c, d] = input.split('')
  return a === d &&
         b === c &&
         a !== b
}
const isBab = (input) => {
  const [a, _, c] = input.split('')
    return a === c
}

const containsAbba = (input) => {
  for (let i = 0; i <= input.length - 4; i++) {
    const underTest = input.substr(i, 4)
    if (isAbba(underTest)) {
      return true
    }
  }
  return false
}

const getHypernetSeqs = (input) => {
  const hypernetSeqRegex = /\[([a-zA-Z])*\]/g
  const hypernetSeqs = []
  let seq = hypernetSeqRegex.exec(input)
  while (seq !== null) {
    hypernetSeqs.push(seq[0])
    seq = hypernetSeqRegex.exec(input)
  }
  return hypernetSeqs
}

const supportsTLS = (input) => {
  const hypernetSeqs = getHypernetSeqs(input)
  const hypernetSeqsWithAbba = hypernetSeqs
    .filter((hs) => containsAbba(hs))
  if (hypernetSeqsWithAbba.length > 0) {
    return false
  }
  if (!containsAbba(input)) return false

  return true
}

const count = (input) => {
  return input.split('\n')
    .filter((ip) => {
      return supportsTLS(ip)
    })
    .length
}

const getAbas = (input) => {
  const hypernetSeqs = getHypernetSeqs(input)
  getHypernetSeqs(input)
    .forEach((hs) => {
      input = input.replace(hs, '')
    })

  const abas = []
  
  for (let i = 0; i <= input.length - 3; i++) {
    const underTest = input.substr(i, 3)
    if (isBab(underTest)) {
      abas.push(underTest)
    }
  }

  return abas
}

const getBab = (input) => {
  const hypernetSeqs = getHypernetSeqs(input)
  let bab = null
  hypernetSeqs
    .forEach((hs) => {
      for (let i = 0; i <= hs.length - 3; i++) {
        const underTest = hs.substr(i, 3)
        if (isBab(underTest)) {
          bab = underTest
        }
      }
    })
  return bab
}

const hasAba = (input) => {
  const bab = getBab(input)
  if (bab === null) return false

  getHypernetSeqs(input)
    .forEach((hs) => {
      input = input.replace(hs, '')
    })
  const [a, b] = bab
  const aba = b + a + b

  return input.includes(aba)
}

const countAbas = (input) => {
  return input.split('\n')
    .forEach((l) => {
      const abas = getAbas(l)
      const hss = getHypernetSeqs(input)
      const bab = getBab(input)
      hss
        .filter((hs) => hs.includes(bab))
    })
}

module.exports = { isAbba, supportsTLS, count, getAbas, getBab, hasAba, countAbas }
