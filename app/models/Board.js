const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema(
  {
    moves: {
      type: [[Number]],
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    winner: {
      type: String,
      default: null
    }
    // opponent - user
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Board', boardSchema)
