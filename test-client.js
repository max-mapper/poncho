var through = require('through')
var delay = require('delay-stream')
var duplexEmitter = require('duplex-emitter')
var websocket = require('websocket-stream')

var socket = websocket('ws://localhost:8181')

window.poncho = poncho = require('./')()

poncho.stream.pipe(socket)
socket.pipe(poncho.stream)

socket.on('open', function() {
  poncho.signUp('batman@gotham.com', 'alfred')

  poncho.on('signup', function(user) {
    console.log('signup success for', user)
  })
})
