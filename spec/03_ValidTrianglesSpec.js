/*
  global describe,  it, expect
*/
import sut from '../src/03_ValidateTriangles/getTotalValidTriangles'

describe('Get Total Valid Triangles', () => {
  it('- returns an integer', () => {
    expect(sut()).toEqual(0)
  })
})
