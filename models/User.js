const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  fistName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  userCohort: String,
  avatar: String,
  sessionDates: [String],
  sessionDurations: [String],
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
      delete ret.passwordHash;
    }
  }
});

schema.virtual('solutions', {
  ref: 'Solution',
  localField: '_id',
  foreignField: 'userId'
});

schema.virtual('date').get(function() {
  return this.updatedAt.toISOString().split('T')[0];
});
