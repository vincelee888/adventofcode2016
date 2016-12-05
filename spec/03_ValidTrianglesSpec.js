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
})
