/*
  global describe,  it, expect
*/
import { sumValidSectorIds, shift } from '../src/04_SecurityThroughObscurity/app'
import { part1 } from './inputs/04'

describe('Get sum of valid site ids', () => {
  it('- Should return an integer', () => {
    expect(sumValidSectorIds()).toEqual(0)
  })

  it('- encoding is {characters}-{sectorId}[{checksum}]', () => {
    expect(sumValidSectorIds('-123[]')).toEqual(123)
  })

  it('- character must appear in checksum', () => {
    expect(sumValidSectorIds('b-123[a]')).toEqual(0)
  })

  it('- character can have multiple occurrences', () => {
    expect(sumValidSectorIds('aa-123[a]')).toEqual(123)
  })

  it('- character count denotes position in checksum', () => {
    expect(sumValidSectorIds('b-aa-123[ab]')).toEqual(123)
  })

  it('- characters with same count are ordered alphabetically', () => {
    expect(sumValidSectorIds('c-b-aa-123[abc]')).toEqual(123)
  })

  it('- characters with same count are ordered alphabetically', () => {
    expect(sumValidSectorIds('c-b-aa-123[abc]')).toEqual(123)
  })

  it('- checksum is first five characters', () => {
    expect(sumValidSectorIds('c-b-aa-d-e-fff-123[fabcd]')).toEqual(123)
  })

  it('- can handle multiple rooms', () => {
    const input = `not-a-real-room-404[oarel]
    a-b-c-d-e-f-g-h-987[abcde]
    aaaaa-bbb-z-y-x-123[abxyz]
    totally-real-room-200[decoy]`
    expect(sumValidSectorIds(input)).toEqual(1514)
  })

  // todo: correct alpha sort test

  it('- can solve part 1', () => {
    expect(sumValidSectorIds(part1)).toEqual(158835)
  })
})

describe('Shift', () => {
  it('- should shift char requested number of times', () => {
    expect(shift('a', 1)).toEqual('b')
  })
  it('- should loop back to start', () => {
    expect(shift('z', 1)).toEqual('a')
  })
  it('- can handle many loops', () => {
    expect(shift('z', 27)).toEqual('a')
  })
})
