/*
  global describe,  it, expect
*/
import { newScreen, rect, rotateRow } from '../src/08_Pixels/app'

describe('Screen', () => {
  it('- should return default to 1x1', () => {
    expect(newScreen()).toEqual('-')
  })
  it('- can specify width', () => {
    expect(newScreen(3)).toEqual('---')
  })
  it('- can specify height', () => {
    const expected = `-
-
-`
    expect(newScreen(1, 3)).toEqual(expected)
  })
})

describe('Rect', () => {
  it('- should turn on cells in the top left', () => {
    const start = newScreen()
    expect(rect(start)).toEqual('*')
  })
  it('- can specify width', () => {
    const start = newScreen(3)
    expect(rect(start, 2)).toEqual('**-')
  })
  it('- can specify height', () => {
    const start = newScreen(3, 3)
    const expected = `**-
**-
---`
    expect(rect(start, 2, 2)).toEqual(expected)
  })
})

describe('Rotate Row', () => {
  it('- should shift the pixel state by the requested cells', () => {
    const start = '*----'
    expect(rotateRow(start)).toEqual('*----')
  })
  it('- should shift the pixel state by the requested cells', () => {
    const start = '*----'
    expect(rotateRow(start, 2)).toEqual('--*--')
  })
  it('- should wrap cells', () => {
    const start = '----*'
    expect(rotateRow(start, 1)).toEqual('*----')
  })
  it('- can specify which row to shift', () => {
    const start = `*----
*----`
    const expected = `*----
-*---`
    expect(rotateRow(start, 1, 1)).toEqual(expected)
  })
})
