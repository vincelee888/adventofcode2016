/*
  global describe,  it, expect
*/
import { isAbba, supportsTLS } from '../src/07_IPv6/app'

describe('ABBA sequence', () => {
  it('- returns true if char 1 = x, char 2 = y, char 3 = y, char 4 = x', () => {
    expect(isAbba('OTTO')).toBeTruthy()
  })

  it('- returns false if char 1 = char 2', () => {
    expect(isAbba('OOOO')).toBeFalsy()
  })
})

describe('IP supports TLS', () => {
  it('- returns false if does not contain ABBA sequence', () => {
    expect(supportsTLS('aaaa[qwer]tyui')).toBeFalsy()
  })

  it('- returns true if does contain ABBA sequence', () => {
    expect(supportsTLS('abba[qwer]tyui')).toBeTruthy()
  })

  // it('- returns false if ABBA sequence is within hypernet sequence', () => {
  //   expect(supportsTLS('abcd[bdsdb]xy[bddb]yx')).toBeFalsy()
  // })
})
