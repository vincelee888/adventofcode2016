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

  move (m) {
    const { direction, distance } = parseCommand(m)
    this.turn(direction)
    if (this.orientation === orientations.north) { this.blocksNorth += distance }
    if (this.orientation === orientations.east) { this.blocksEast += distance }
    if (this.orientation === orientations.south) { this.blocksNorth -= distance }
    if (this.orientation === orientations.west) { this.blocksEast -= distance }
  }
}

const getDistanceAway = (moves) => {
  const santa = new Santa()

  moves
  .split(', ')
  .filter((m) => m.length > 0)
  .forEach((m) => {
    santa.move(m)
  })

  return Math.abs(santa.blocksNorth) + Math.abs(santa.blocksEast)
}

module.exports = getDistanceAway
