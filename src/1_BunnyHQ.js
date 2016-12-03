const orientations = {
  north: 0,
  east: 1,
  south: 2,
  west: 3
}

const parseCommand = (command) => {
  return {
    direction: command.substring(0, 1),
    distance: parseInt(command.substring(1, command.length))
  }
}

function Santa () {
  const self = this
  self.orientation = orientations.north
  self.blocksNorth = 0
  self.blocksEast = 0

  self.getNewOrientation = (direction) => {
    const modifier = direction === 'R' ? 1 : -1
    self.orientation += modifier
    if (self.orientation > orientations.west) return orientations.north
    if (self.orientation < orientations.north) return orientations.west
    return self.orientation
  }

  self.turn = (direction) => {
    self.orientation = self.getNewOrientation(direction)
  }

  self.move = (m) => {
    const { direction, distance } = parseCommand(m)
    self.turn(direction)
    if (self.orientation === orientations.north) { self.blocksNorth += distance }
    if (self.orientation === orientations.east) { self.blocksEast += distance }
    if (self.orientation === orientations.south) { self.blocksNorth -= distance }
    if (self.orientation === orientations.west) { self.blocksEast -= distance }
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
