function TestModel () {
  var self = this

  self.getGreeting = () => {
    return 'hello world'
  }
}

module.exports = new TestModel()
