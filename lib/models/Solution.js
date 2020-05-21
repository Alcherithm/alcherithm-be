const mongoose = require('mongoose');
// point of truth 

const solutionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    required: true
  },
  passed: {
    type: Boolean,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
}, { timestamps: true });

// aggregations

module.exports = mongoose.model('Solution', solutionSchema);
