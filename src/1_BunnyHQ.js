const orientations = {
  north: 0,
  east: 1,
  south: 2,
  west: 3
}

function Santa () {
  const self = this
  self.orientation = orientations.north

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
}

function TestModel () {
  const self = this
  const santa = new Santa()

  self.getDistanceAway = (moves) => {
    let stepsNorth = 0
    let stepsEast = 0

    moves.forEach((m) => {
      const direction = m.substring(0, 1)
      santa.turn(direction)
      const distance = parseInt(m.substring(1, m.length))
      if (santa.orientation === orientations.north) { stepsNorth += distance }
      if (santa.orientation === orientations.east) { stepsEast += distance }
      if (santa.orientation === orientations.south) { stepsNorth -= distance }
      if (santa.orientation === orientations.west) { stepsEast -= distance }
    })

    return Math.abs(stepsNorth) + Math.abs(stepsEast)
  }
}

module.exports = new TestModel()
