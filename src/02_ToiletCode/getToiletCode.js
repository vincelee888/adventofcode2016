class Keypad {
  constructor (layout) {
    this.layout = layout
  }

  getValue ({ buttonsAcross, buttonsDown }) {
    return this.layout[buttonsDown - 1][buttonsAcross - 1]
  }
}

module.exports = (keypadLayout, startPosition, moves) => {
  const keypad = new Keypad(keypadLayout)
  return moves
    .split('\n')
    .map((m) => keypad.getValue(startPosition))
    .join('')
}
