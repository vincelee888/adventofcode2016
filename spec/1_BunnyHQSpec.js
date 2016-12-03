/*
  global describe, beforeEach, it, expect
*/


describe('BunnyHQ map', () => {
  let sut = null

  beforeEach(() => {
    sut = require('../src/1_BunnyHQ')
  })

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

  describe('Three moves', () => {
    describe('- clockwise in a square', () => {
      it('should return initial distance', () => {
        expect(sut.getDistanceAway(['R2', 'R2', 'R2'])).toEqual(2)
      })
    })
    describe('- anti-clockwise in a square', () => {
      it('should return initial distance', () => {
        expect(sut.getDistanceAway(['L2', 'L2', 'L2'])).toEqual(2)
      })
    })
  })

})
