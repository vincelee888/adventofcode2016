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
    const moves = `UUUU
    LLLL`
    const result = getToiletCode(keypad, startPosition, moves)
    expect(result.length).toEqual(2)
  })
})
