const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema(
  {
    moves: {
      type: [[String]],
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Board', boardSchema)
