var through = require('through')
var delay = require('delay-stream')
var duplexEmitter = require('duplex-emitter')

// simulate serialization/deserialization of events over a stream
var fakeBackendStream = through()
var fakeBackend = duplexEmitter(fakeBackendStream)

fakeBackend.on('signUp', function(user, pass) {
  console.log('backend signUp', user, pass)
  // send signup success event back
  fakeBackend.emit('response', user)
})

window.poncho = poncho = require('./')()

fakeBackendStream.on('data', function(c) { console.log('fb', c) })

// simulate 100ms round trip lag
poncho.stream.pipe(fakeBackendStream)
// fakeBackendStream.pipe(poncho.stream)

poncho.signUp('batman@gotham.com', 'alfred')
// 
// poncho.on('signup', function(user) {
//   console.log('signup success for', user)
// })
