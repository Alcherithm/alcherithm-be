const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  starterCode: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  challengeNumber: {
    type: Number,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  qunitTest: {
    type: String,
    required: true
  },
  hints: {
    type: String,
    required: false
  },
  resources: {
    type: String,
    required: true,
  },
}, {
  toJSON: {
    virtuals: true,
  }
});

challengeSchema.virtual('solutions', {
  ref: 'Solution',
  localField: '_id',
  foreignField: 'challengeId'
});

module.exports = mongoose.model('Challenge', challengeSchema);

// TODO
// Static method aggregation for number of times challenge was completed by all users.


