const off = '-'
const on = '*'

export const newScreen = (width = 1, height = 1) => {
  let line = off.repeat(width)
  let result = ''
  for (let i = 0; i < height; i++) {
    if (i > 0) { result += '\n' }
    result += line
  }
  return result
}

const switchOnLine = (line, width = 1) => {
  return on.repeat(width) + line.substr(width, line.length - 1)
}

export const rect = (screen, width = 1, height = 1) => {
  const rows = screen.split('\n')
  for (let rowIndex in rows) {
    if (rowIndex < height) {
      rows[rowIndex] = switchOnLine(rows[rowIndex], width)
    }
  }
  return rows.join('\n')
}

const rotate = (line, cellsToMove) => {
  const pattern = line + line
  return pattern.substr(line.length - cellsToMove, line.length)
}

export const rotateRow = (screen, cellsToMove, rowToRotate = 0) => {
  const rows = screen.split('\n')
  rows[rowToRotate] = rotate(rows[rowToRotate], cellsToMove)
  return rows.join('\n')
}
