const isValid = ({parts, checksum}) => {
  const sorted = parts
    .map((p) => ({ char: p.charAt(0), priority: p.length }))
    .sort((a, b) => {
      if (b.priority < a.priority) return -1
      if (b.priority > a.priority) return 1

      return b.char < a.char
    })

  return checksum.split('')
    .map((el, i) => el !== sorted[i].char)
    .filter((v) => v).length === 0
}

const parse = (input) => {
  const split = input.split('[')
  const checksum = split[1].substring(0, split[1].length - 1)
  const parts = split[0].split('-')
  const siteId = parseInt(parts.pop())
  return { parts, siteId, checksum }
}

const sumValidSiteIds = (input) => {
  if (input === undefined) return 0

  const elements = parse(input)
  if (isValid(elements)) {
    return elements.siteId
  }

  return 0
}

module.exports = { sumValidSiteIds }
