var pi = require('pi')
var getIntsForChars = require('./getIntsForChars')
var _ = require('lodash')
var calculatedPi = pi(10000, false)

module.exports = (message) => {
  var messageAsNumbers = getIntsForChars({stringIn: message})
  var pointer = calculatedPi.indexOf(messageAsNumbers)
  var length = messageAsNumbers.length
  return {pointer, length}
}
