var _ = require('lodash')
module.exports = ({stringIn}) => {

  var thangs = _.map(stringIn, (character) => {
    var key = character.charCodeAt(0) - 87

    if(key == -55) key = 99 //space
    return key.toString()
  })

  return thangs.join('')
}
