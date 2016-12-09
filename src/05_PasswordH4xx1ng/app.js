const md5 = require('md5')

/* todo:
[ ] abstract out getInterestingHash to makes tests quicker
[ ] put some tests in around part 2!
*/

const getInterestingHash = (string, startIndex) => {
  const input = string + startIndex
  let hash = md5(input)
  let index = startIndex
  while (!hash.startsWith('00000')) {
    index++
    hash = md5(string + index)
  }
  return { hash, index }
}

const passwordPart = (hash) => {
  return hash.charAt(5)
}

const getPassword = (string, length) => {
  const decrypt = (string, length, startIndex, currPassword) => {
    if (currPassword.length === length) return currPassword
    const nextHash = getInterestingHash(string, startIndex)
    return decrypt(string, length, nextHash.index + 1, currPassword + passwordPart(nextHash.hash))
  }
  return decrypt(string, length, 0, '')
}

const getTruePassword = (string, length) => {
  const replaceChar = (string, index, newChar) => {
    if (string.charAt(index) !== '*') return string
    if (isNaN(index)) return string

    console.log(string, index, newChar)

    const arr = string.split('')
    arr[index] = newChar
    const updated = arr.join('')
    console.log(updated)
    return updated
  }
  const decrypt = (string, length, startIndex, currPassword) => {
    if (!currPassword.includes('*')) return currPassword
    const nextHash = getInterestingHash(string, startIndex)
    const nextIndex = nextHash.index + 1
    console.log(nextHash)
    const updatedPassword = replaceChar(currPassword, nextHash.hash.charAt(5), nextHash.hash.charAt(6))
    console.log(updatedPassword)
    return decrypt(string, length, nextIndex, updatedPassword)
  }
  let startingPassword = ''
  for (let i = 0; i < length; i++) {
    startingPassword += '*'
  }
  console.log('startPassword: ' + startingPassword)
  return decrypt(string, length, 0, startingPassword)
}

module.exports = { getInterestingHash, getPassword, getTruePassword }
