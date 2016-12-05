/*
  global describe,  it, expect
*/
import getToiletCode from '../src/02_ToiletCode/getToiletCode'

describe('Get Toilet Code', () => {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  const startPosition = {
    buttonsAcross: 2,
    buttonsDown: 2
  }

  it('- Should start at 5', () => {
    const moves = ''
    expect(getToiletCode(keypad, startPosition, moves)).toEqual('5')
  })

  it('- Should return a digit for each line', () => {
    const moves = `U
    L`
    const result = getToiletCode(keypad, startPosition, moves)
    expect(result.length).toEqual(2)
  })

  describe('- Letter corresponds to a direction', () => {
    it('- U moves up to 2', () => {
      const moves = 'U'
      const result = getToiletCode(keypad, startPosition, moves)
      expect(result).toEqual('2')
    })
    it('- R moves right to 6', () => {
      const moves = 'R'
      const result = getToiletCode(keypad, startPosition, moves)
      expect(result).toEqual('6')
    })
  })
})
