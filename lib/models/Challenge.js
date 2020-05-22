const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  overview: {
    type: String,
    required: true,
  },
  documentation: [{
    type: String,
    required: true,
  }],
  video: {
    type: String,
  },
  hints: {
    type: String,
  }
});

const challengeSchema = new mongoose.Schema({
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
  starterCode: {
    type: String,
    required: true
  },
  qunitTest: {
    type: String,
    required: true
  },
  resources: resourceSchema
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


