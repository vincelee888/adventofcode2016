/*
  global describe, beforeEach, afterEach, it, expect
*/

var sut = require('../src/TestModel')

describe('Test', () => {
  beforeEach(() => {

  })
  afterEach(() => {

  })
  it('should say hello', () => {
    expect(sut.getGreeting()).toEqual('hello world')
  })
})
