/*
  global describe,  it, expect
*/
import getToiletCode from '../src/02_ToiletCode/getToiletCode'

describe('Get Toilet Code', () => {
  it('- Should start at 5', () => {
    expect(getToiletCode('')).toEqual('5')
  })
})
