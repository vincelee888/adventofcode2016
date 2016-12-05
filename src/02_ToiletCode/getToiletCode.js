class Keypad {
  constructor (layout) {
    this.layout = layout
  }

  getValue ({ buttonsAcross, buttonsDown }) {
    return this.layout[buttonsDown - 1][buttonsAcross - 1]
  }
}

class Plotter {
  constructor (layout) {
    this.layout = layout
  }

  getDigit ({ buttonsAcross, buttonsDown }, moves) {
    moves
      .split('')
      .forEach((m) => {
        if (m === 'U') { buttonsDown-- }
        if (m === 'R') { buttonsAcross++ }
      })
    return { buttonsAcross, buttonsDown }
  }
}

module.exports = (keypadLayout, startPosition, moves) => {
  const keypad = new Keypad(keypadLayout)
  const plotter = new Plotter(keypadLayout)
  const results = []
  let nextPosition = startPosition
  moves
    .split('\n')
    .forEach((m) => {
      const endPosition = plotter.getDigit(nextPosition, m)
      const result = keypad.getValue(endPosition)
      nextPosition = endPosition
      results.push(result)
    })

  return results.join('')
}
