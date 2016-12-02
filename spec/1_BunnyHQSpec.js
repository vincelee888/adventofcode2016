/*
  global describe, it, expect
*/

var sut = require('../src/1_BunnyHQ')

describe('No movement', () => {
  it('should return 0', () => {
    expect(sut.getDistanceAway([])).toEqual(0)
  })
})

describe('Single move', () => {
  describe('- to the left', () => {
    it('should return same distance', () => {
      expect(sut.getDistanceAway(['L3'])).toEqual(3)
    })
  })
  describe('- to the right', () => {
    it('should return same distance', () => {
      expect(sut.getDistanceAway(['R4'])).toEqual(4)
    })
  })
})
