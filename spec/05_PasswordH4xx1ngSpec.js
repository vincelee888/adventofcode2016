/*
  global describe,  it, expect
*/
import { getInterestingHash, getPassword, getTruePassword } from '../src/05_PasswordH4xx1ng/app'

describe('Get interesting hash', () => {
  it('- Should return first hash that starts with 5 zeroes', () => {
    expect(getInterestingHash('abc', 0).hash.charAt(5)).toEqual('1')
  })
})

describe('Get password (part 1)', () => {
  // it('- Should construct password up to requested length', () => {
  //   expect(getPassword('abc', 1)).toEqual('1')
  // })
  // it('- Should (partially) solve example', () => {
  //   expect(getPassword('abc', 3)).toEqual('18f')
  // })
  // it('- Should solve problem', () => {
  //   expect(getPassword('ugkcyxxp', 8)).toEqual('d4cd2ee1')
  // })
})


describe('Get real password! (part 2)', () => {
  // it('- Should construct password up to requested length', () => {
  //   expect(getTruePassword('abc', 1).charAt(1)).toEqual('5')
  // })

  // it('- Should construct password up to requested length', () => {
  //   expect(getTruePassword('abc', 8)).toEqual('05ace8e3')
  // })

  // it('- Should solve', () => {
  //   expect(getTruePassword('ugkcyxxp', 8)).toEqual('05ace8e3')
  // })
})
