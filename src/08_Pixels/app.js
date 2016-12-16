const off = '-'
const on = '*'
const newLine = '\n'

export const newScreen = (width = 1, height = 1) => {
  let line = off.repeat(width)
  let result = ''
  for (let i = 0; i < height; i++) {
    if (i > 0) { result += newLine }
    result += line
  }
  return result
}

const switchOnLine = (line, width = 1) => {
  return on.repeat(width) + line.substr(width, line.length - 1)
}

export const rect = (screen, width = 1, height = 1) => {
  const rows = screen.split(newLine)
  for (let rowIndex in rows) {
    if (rowIndex < height) {
      rows[rowIndex] = switchOnLine(rows[rowIndex], width)
    }
  }
  return rows.join(newLine)
}

const rotate = (line, cellsToMove) => {
  const pattern = line + line
  return pattern.substr(line.length - cellsToMove, line.length)
}

export const rotateRow = (screen, cellsToMove, rowToRotate = 0) => {
  const rows = screen.split(newLine)
  rows[rowToRotate] = rotate(rows[rowToRotate], cellsToMove)
  return rows.join(newLine)
}

const reInsertColumn = (screen, column, columnIndex) => {
  const screenRows = screen.split(newLine)
  const columnChars = column.split('')
  for (let rowIndex in screenRows) {
    const row = screenRows[rowIndex]
    const left = row.substr(0, columnIndex)
    const newChar = columnChars[rowIndex]
    const right = row.substr(columnIndex + 1, row.length - columnIndex)
    screenRows[rowIndex] = `${left}${newChar}${right}`
  }
  return screenRows.join(newLine)
}

export const rotateColumn = (screen, cellsToMove = 0, columnIndex = 0) => {
  const rows = screen
    .split(newLine)
  cellsToMove = cellsToMove % rows.length
  const columnState = rows
    .reduce((a, b) => a + b.charAt(columnIndex), '')
  const updated = rotate(columnState, cellsToMove)
  return reInsertColumn(screen, updated, columnIndex)
}

const rectFunc = {
  'identifier': (c) => c.startsWith('rect'),
  'getParams': (c) => {
    return c.split(' ')[1].split('x')
  },
  'exec': (screen, [width, height]) => {
    return rect(screen, width, height)
  }
}

const rotateColumnFunc = {
  'identifier': (c) => c.startsWith('rotate column x'),
  'getParams': (c) => {
    return c.split('=')[1].split(' by ')
  },
  'exec': (screen, [columnIndex, cellsToMove]) => {
    return rotateColumn(screen, cellsToMove, parseInt(columnIndex))
  }
}

const rotateRowFunc = {
  'identifier': (c) => c.startsWith('rotate row y'),
  'getParams': (c) => {
    return c.split('=')[1].split(' by ')
  },
  'exec': (screen, [rowIndex, cellsToMove]) => {
    return rotateRow(screen, cellsToMove, parseInt(rowIndex))
  }
}

const funcs = [rectFunc, rotateColumnFunc, rotateRowFunc]

const getFuncType = (command) => {
  return funcs
    .filter((f) => f.identifier(command))[0]
}

export const transform = (commandText, screen) => {
  const funcType = getFuncType(commandText)
  const params = funcType.getParams(commandText)
  return funcType.exec(screen, params)
}

export const processInput = (screen, commands) => {
  const output = commands
    .split(newLine)
    .reduce((a, b) => transform(b, a), screen)
  console.log(output)
  return output
}
