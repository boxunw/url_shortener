const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  done: {
    type: String
  }
})
module.exports = mongoose.model('Url', urlSchema)