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
        if (m === 'D') { buttonsDown++ }
        if (m === 'L') { buttonsAcross-- }

        if (buttonsDown <= 0) buttonsDown = 1
        if (buttonsAcross > this.layout[0].length) buttonsAcross = this.layout[0].length
        if (buttonsDown > this.layout.length) buttonsDown = this.layout.length
        if (buttonsAcross <= 0) buttonsAcross = 1
      })
    return { buttonsAcross, buttonsDown }
  }
}

module.exports = () => {
  return 0
}
