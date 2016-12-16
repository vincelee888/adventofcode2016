/*
  global describe,  it, expect
*/
import * as pixel from '../src/08_Pixels/app'
import { testData } from './inputs/08'

describe('Screen', () => {
  it('- should return default to 1x1', () => {
    expect(pixel.newScreen()).toEqual('-')
  })
  it('- can specify width', () => {
    expect(pixel.newScreen(3)).toEqual('---')
  })
  it('- can specify height', () => {
    const expected = `-
-
-`
    expect(pixel.newScreen(1, 3)).toEqual(expected)
  })
})

describe('Rect', () => {
  it('- should turn on cells in the top left', () => {
    const start = pixel.newScreen()
    expect(pixel.rect(start)).toEqual('*')
  })
  it('- can specify width', () => {
    const start = pixel.newScreen(3)
    expect(pixel.rect(start, 2)).toEqual('**-')
  })
  it('- can specify height', () => {
    const start = pixel.newScreen(3, 3)
    const expected = `**-
**-
---`
    expect(pixel.rect(start, 2, 2)).toEqual(expected)
  })
})

describe('Rotate Row', () => {
  it('- should do nothing by default', () => {
    const start = '*----'
    expect(pixel.rotateRow(start)).toEqual('*----')
  })
  it('- should shift the pixel state by the requested cells', () => {
    const start = '*----'
    expect(pixel.rotateRow(start, 2)).toEqual('--*--')
  })
  it('- should wrap cells', () => {
    const start = '----*'
    expect(pixel.rotateRow(start, 1)).toEqual('*----')
  })
  it('- can specify which row to shift', () => {
    const start = `*----
*----`
    const expected = `*----
-*---`
    expect(pixel.rotateRow(start, 1, 1)).toEqual(expected)
  })
})

describe('Rotate Column', () => {
  it('- should do nothing by default', () => {
    const start = `*
-
-`
    expect(pixel.rotateColumn(start)).toEqual(start)
  })
  it('- should shift the pixel state by the requested cells', () => {
    const start = `*
-
-`
    const expected = `-
*
-`
    expect(pixel.rotateColumn(start, 1)).toEqual(expected)
  })
  it('- should shift the pixel state of the requested column', () => {
    const start = `-*-
---
---`
    const expected = `---
-*-
---`
    expect(pixel.rotateColumn(start, 1, 1)).toEqual(expected)
  })
  it('- should wrap indefinitely', () => {
    const start = `-*-
---
---`
    const expected = `---
-*-
---`
    expect(pixel.rotateColumn(start, 10, 1)).toEqual(expected)
  })
})

describe('Text commands', () => {
  it('- rect axb turns on rectangle', () => {
    const start = pixel.newScreen(3, 3)
    const expected = `***
***
---`
    expect(pixel.transform('rect 3x2', start)).toEqual(expected)
  })

  it('- rotate column x=a by b rotates column a by b pixels', () => {
    const start = `-*-
---
---`
    const expected = `---
-*-
---`
    expect(pixel.transform('rotate column x=1 by 1', start)).toEqual(expected)
  })

  it('- rotate row y=a by b rotates row a by b pixels', () => {
    const start = `*----
*----`
    const expected = `-*---
*----`
    expect(pixel.transform('rotate row y=0 by 1', start)).toEqual(expected)
  })

  it('- can execute multiple commands', () => {
    const start = pixel.newScreen(3, 3)
    const commands = `rect 2x2
rotate row y=1 by 1`
    const expected = `**-
-**
---`
    expect(pixel.processInput(start, commands)).toEqual(expected)
  })

  it('- can solve part 1', () => {
    const start = pixel.newScreen(50, 6)
    const processed = pixel.processInput(start, testData)
    const onCount = processed
      .replace('\n', '')
      .split('')
      .filter((c) => c === '*')
      .length
    expect(onCount).toEqual(121)
  })
})
