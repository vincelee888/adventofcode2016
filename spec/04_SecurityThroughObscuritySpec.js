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

  it('- part must appear in checksum', () => {
    expect(sumValidSiteIds('b-123[a]')).toEqual(0)
  })
})
