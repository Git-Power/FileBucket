const mongoose = require('mongoose')

const bucketSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Bucket', bucketSchema)
