function TestModel () {
  var self = this

  self.getDistanceAway = (moves) => {
    let result = 0

    moves.forEach((m) => {
      const distance = parseInt(m.substring(1, m.length))
      result += distance
    })

    return result
  }
}

module.exports = new TestModel()
