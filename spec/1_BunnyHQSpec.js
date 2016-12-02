/*
  global describe, beforeEach, afterEach, it, expect
*/

var sut = require('../src/1_BunnyHQ')

describe('No movement', () => {
  it('should return 0', () => {
    expect(sut.getDistanceAway([])).toEqual(0)
  })
})
