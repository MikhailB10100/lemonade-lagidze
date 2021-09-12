const { Schema, model } = require('mongoose')

const ApplicationSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  text: { type: String, default: '' },
  isDone: { type: Boolean, default: false },
  date: { type: String },
})

module.exports = model('Application', ApplicationSchema)
