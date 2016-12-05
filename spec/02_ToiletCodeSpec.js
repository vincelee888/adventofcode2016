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
    it('- D moves down to 8', () => {
      const moves = 'D'
      const result = getToiletCode(keypad, startPosition, moves)
      expect(result).toEqual('8')
    })
    it('- L moves down to 4', () => {
      const moves = 'L'
      const result = getToiletCode(keypad, startPosition, moves)
      expect(result).toEqual('4')
    })
  })

  describe('- If move moves off keypad, stay on current button', () => {
    it('- UU stays on 2', () => {
      const moves = 'UU'
      const result = getToiletCode(keypad, startPosition, moves)
      expect(result).toEqual('2')
    })
    it('- RR stays on 6', () => {
      const moves = 'RR'
      const result = getToiletCode(keypad, startPosition, moves)
      expect(result).toEqual('6')
    })
    it('- DD stays on 8', () => {
      const moves = 'DD'
      const result = getToiletCode(keypad, startPosition, moves)
      expect(result).toEqual('8')
    })
    it('- LL stays on 4', () => {
      const moves = 'LL'
      const result = getToiletCode(keypad, startPosition, moves)
      expect(result).toEqual('4')
    })
  })
})
