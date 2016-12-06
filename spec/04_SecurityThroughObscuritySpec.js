/*
  global describe,  it, expect
*/
import { sumValidSiteIds } from '../src/04_SecurityThroughObscurity/app'

describe('Get sum of valid site ids', () => {
  it('- Should return an integer', () => {
    expect(sumValidSiteIds()).toEqual(0)
  })

  it('- encoding is {parts}-{siteId}[{checksum}]', () => {
    expect(sumValidSiteIds('-123[]')).toEqual(123)
  })

  it('- part id must appear in checksum', () => {
    expect(sumValidSiteIds('b-123[a]')).toEqual(0)
  })

  it('- part id can have multiple occurrences', () => {
    expect(sumValidSiteIds('aa-123[a]')).toEqual(123)
  })
})
