var superSecretMessage = 'hi'
var encoder = require('./encode')
var encodedMessage = encoder(superSecretMessage)

console.log('encodedMessage: ')
console.log(encodedMessage)

var decoder = require('./decode')
var decodedMessage = decoder(encodedMessage)

console.log('decodedMessage: ')
console.log(decodedMessage)
