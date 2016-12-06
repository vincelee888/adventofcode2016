const isValid = ({parts, checksum}) => {
  return parts[0].charAt(0) === checksum
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
