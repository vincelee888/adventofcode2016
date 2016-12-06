const orientationArray = ['north', 'east', 'south', 'west']
const orientations = {}
orientationArray.forEach((o, i) => {
  orientations[o] = i
})

const parseCommand = (command) => {
  return {
    direction: command.substring(0, 1),
    distance: parseInt(command.substring(1, command.length))
  }
}

class Santa {
  constructor () {
    this.orientation = orientations.north
    this.blocksNorth = 0
    this.blocksEast = 0
    this.blocksVisited = [{ n: this.blocksNorth, e: this.blocksEast }]
    this.firstDoubleVisited = null
  }

  getNewOrientation (direction) {
    const modifier = direction === 'R' ? 1 : -1
    this.orientation += modifier
    if (this.orientation > orientations.west) return orientations.north
    if (this.orientation < orientations.north) return orientations.west
    return this.orientation
  }

  turn (direction) {
    this.orientation = this.getNewOrientation(direction)
  }

  updateVisited () {
    const currLocation = { n: this.blocksNorth, e: this.blocksEast }
    this.blocksVisited.push({ n: currLocation.n, e: currLocation.e })
    const dupes = this.blocksVisited
      .filter((v) => {
        return v.n === currLocation.n && v.e === currLocation.e
      })
    if (dupes.length === 2 && this.firstDoubleVisited === null) {
      this.firstDoubleVisited = currLocation
    }
  }

  moveNorth (distance) {
    for (let i = 0; i < distance; i++) {
      this.blocksNorth++
      this.updateVisited()
    }
  }

  moveEast (distance) {
    for (let i = 0; i < distance; i++) {
      this.blocksEast++
      this.updateVisited()
    }
  }

  moveSouth (distance) {
    for (let i = 0; i < distance; i++) {
      this.blocksNorth--
      this.updateVisited()
    }
  }

  moveWest (distance) {
    for (let i = 0; i < distance; i++) {
      this.blocksEast--
      this.updateVisited()
    }
  }

  move ({ direction, distance }) {
    this.turn(direction)
    if (this.orientation === orientations.north) { this.moveNorth(distance) }
    if (this.orientation === orientations.east) { this.moveEast(distance) }
    if (this.orientation === orientations.south) { this.moveSouth(distance) }
    if (this.orientation === orientations.west) { this.moveWest(distance) }
  }
}

const getBlocksAway = (moves) => {
  const santa = new Santa()

  moves
    .split(', ')
    .filter((m) => m.length > 0)
    .forEach((m) => {
      santa.move(parseCommand(m))
    })

  return Math.abs(santa.blocksNorth) + Math.abs(santa.blocksEast)
}

const getFirstDoubleVisited = (moves) => {
  const santa = new Santa()

  moves
    .split(', ')
    .filter((m) => m.length > 0)
    .forEach((m) => {
      santa.move(parseCommand(m))
    })

  const { n, e } = santa.firstDoubleVisited
  return Math.abs(n) + Math.abs(e)
}

module.exports = { getBlocksAway, getFirstDoubleVisited }
