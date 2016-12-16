var pi = require('pi')
var calculatedPi = pi(10000, false)
var _ = require('lodash')

module.exports = (encodedMessage) => {
  var numbers = calculatedPi.substring(encodedMessage.pointer, encodedMessage.pointer+encodedMessage.length)

  var array = numbers.match(/(..?)/g)
  var decodedMessage = _.map(array, (number) => {
    if(number == 99) return ' '
    var result = String.fromCharCode(parseInt(number)+87)
    return result
  })

  return _.join(decodedMessage, '')
}
