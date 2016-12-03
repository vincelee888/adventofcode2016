/*
  global describe,  it, expect
*/
import getBlocksAway from '../src/01_BunnyHQ/getBlocksAway'

describe('BunnyHQ map', () => {
  describe('No movement', () => {
    it('should return 0', () => {
      expect(getBlocksAway('')).toEqual(0)
    })
  })

  describe('Single move', () => {
    describe('- to the left', () => {
      it('should return same distance', () => {
        expect(getBlocksAway('L3')).toEqual(3)
      })
    })
    describe('- to the right', () => {
      it('should return same distance', () => {
        expect(getBlocksAway('R4')).toEqual(4)
      })
    })
  })

  describe('Three moves', () => {
    describe('- clockwise in a square', () => {
      it('should return square\'s length', () => {
        expect(getBlocksAway('R2, R2, R2')).toEqual(2)
      })
    })
    describe('- anti-clockwise in a square', () => {
      it('should return square\'s length', () => {
        expect(getBlocksAway('L2, L2, L2')).toEqual(2)
      })
    })
  })

  describe('- move with supplied test case', () => {
    it('should get expected', () => {
      expect(getBlocksAway('R5, L5, R5, R3')).toEqual(12)
    })
  })

  describe('- real directions', () => {
    it('should get expected', () => {
      expect(getBlocksAway('L3, R1, L4, L1, L2, R4, L3, L3, R2, R3, L5, R1, R3, L4, L1, L2, R2, R1, L4, L4, R2, L5, R3, R2, R1, L1, L2, R2, R2, L1, L1, R2, R1, L3, L5, R4, L3, R3, R3, L5, L190, L4, R4, R51, L4, R5, R5, R2, L1, L3, R1, R4, L3, R1, R3, L5, L4, R2, R5, R2, L1, L5, L1, L1, R78, L3, R2, L3, R5, L2, R2, R4, L1, L4, R1, R185, R3, L4, L1, L1, L3, R4, L4, L1, R5, L5, L1, R5, L1, R2, L5, L2, R4, R3, L2, R3, R1, L3, L5, L4, R3, L2, L4, L5, L4, R1, L1, R5, L2, R4, R2, R3, L1, L1, L4, L3, R4, L3, L5, R2, L5, L1, L1, R2, R3, L5, L3, L2, L1, L4, R4, R4, L2, R3, R1, L2, R1, L2, L2, R3, R3, L1, R4, L5, L3, R4, R4, R1, L2, L5, L3, R1, R4, L2, R5, R4, R2, L5, L3, R4, R1, L1, R5, L3, R1, R5, L2, R1, L5, L2, R2, L2, L3, R3, R3, R1')).toEqual(252)
    })
  })
})
