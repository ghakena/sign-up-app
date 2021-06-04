// create db schema using mongoose, a MongoDB library.
const mongoose = require('mongoose');

const signupTemplate = mongoose.Schema({
  // determine what details to collect from user during signup.
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

})

// mongoose.model takes in 2 arguments, name of model and the name of the created schema.
module.exports = mongoose.model('usersTable', signupTemplate);
