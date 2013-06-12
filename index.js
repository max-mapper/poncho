// easy way to create readable/writable streams
var through = require('through')

// easy way to get an event emitter over a stream
var duplexEmitter = require('duplex-emitter')

module.exports = function poncho() {
  var stream = through() // returns stream
  var self = duplexEmitter(stream)
  self.stream = stream
  addAccountMethods(self)
  return self
}

function addAccountMethods(obj) {
  // todo inheritance or something
  obj.signUp = function(username, password) {
    this.emit('signUp', username, password)
  }

  obj.signIn = function(username, password) {

  }

  obj.signOut = function() {

  }

  obj.changePassword = function(currentPassword, newPassword) {

  }

  obj.changeUsername = function(currentPassword, newUsername) {

  }

  obj.resetPassword = function(username) {

  }

  obj.destroy = function() {

  }
}

