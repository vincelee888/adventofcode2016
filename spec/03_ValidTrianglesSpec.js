/*
  global describe,  it, expect
*/
import sut from '../src/03_ValidateTriangles/getTotalValidTriangles'

describe('Get Total Valid Triangles', () => {
  it('- returns an integer', () => {
    expect(sut()).toEqual(0)
  })

  it('- true if sum of two smallest values is greater than the other number', () => {
    expect(sut('1 2 2')).toEqual(1)
  })

  it('- false if sum of two smallest values is equal to or less than the other number', () => {
    expect(sut('1 2 3')).toEqual(0)
  })

  it('- can have multiple whitespace', () => {
    expect(sut('1     2  2')).toEqual(1)
  })

  it('- can process many lines', () => {
    const input = `3 6 2
    3 5 6`
    expect(sut(input)).toEqual(2)
  })
})
