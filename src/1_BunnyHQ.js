const orientations = {
  north: 0,
  east: 1,
  south: 2,
  west: 3
}

const parseCommand = (command) => {
  return {
    turnDirection: command.substring(0, 1),
    distance: parseInt(command.substring(1, command.length))
  }
}

function Santa () {
  const self = this
  self.orientation = orientations.north
  self.stepsNorth = 0
  self.stepsEast = 0

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
    if (self.orientation === orientations.north) { self.stepsNorth += distance }
    if (self.orientation === orientations.east) { self.stepsEast += distance }
    if (self.orientation === orientations.south) { self.stepsNorth -= distance }
    if (self.orientation === orientations.west) { self.stepsEast -= distance }
  }
}

const getDistanceAway = (moves) => {
  const santa = new Santa()

  moves.forEach((m) => {
    santa.move(m)
  })

  return Math.abs(santa.stepsNorth) + Math.abs(santa.stepsEast)
}

module.exports = getDistanceAway
