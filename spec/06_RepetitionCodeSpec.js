/*
  global describe,  it, expect
*/
import { getCode } from '../src/06_RepetitionCode/app'
import { input as part1 } from './inputs/06'

describe('Get repetition code', () => {
  it('- Should character for each column provided', () => {
    const input = 'abc'
    expect(getCode(input).length).toEqual(3)
  })

  it('- Should set character with the most occurrences for that position', () => {
    const input = `a
    a
    b`
    expect(getCode(input)).toEqual('a')
  })

  it('- Should handle multiple columns', () => {
    const input = `ab
    ac
    bc`
    expect(getCode(input)).toEqual('ac')
  })

  it('- Should solve example', () => {
    const input = `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`
    expect(getCode(input)).toEqual('easter')
  })

  it('- Should solve part 1', () => {
    expect(getCode(part1)).toEqual('ursvoerv')
  })
})
