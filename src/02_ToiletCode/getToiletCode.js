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
        const currentLocation = { buttonsAcross, buttonsDown }

        if (m === 'U') { buttonsDown-- }
        if (m === 'R') { buttonsAcross++ }
        if (m === 'D') { buttonsDown++ }
        if (m === 'L') { buttonsAcross-- }

        if (buttonsDown <= 0) buttonsDown = 1
        if (buttonsAcross > this.layout[0].length) buttonsAcross = this.layout[0].length
        if (buttonsDown > this.layout.length) buttonsDown = this.layout.length
        if (buttonsAcross <= 0) buttonsAcross = 1

        if (this.layout[buttonsDown - 1][buttonsAcross - 1] === 'x') {
          buttonsAcross = currentLocation.buttonsAcross
          buttonsDown = currentLocation.buttonsDown
        }
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
