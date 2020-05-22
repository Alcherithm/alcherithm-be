const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { sign, verify } = require('jsonwebtoken');

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  cohort: String,
  avatar: String,
  sessionDates: [String],
  sessionDurations: [String],
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
      delete ret.__v;
      delete ret.passwordHash;
    }
  }
});

schema.virtual('solutions', {
  ref: 'Solution',
  localField: '_id',
  foreignField: 'userId'
});

// get date when user signs up
schema.virtual('signUpDate').get(function() {
  return this.createdAt.toISOString().split('T')[0];
});

// send error if email already exists
schema.post('save', function(error, doc, next) {
  if(error.code === 100) return next(new Error('Email already taken'));
  next(error);
});

// hash password
schema.virtual('password').set(function(password) {
  const hash = bcrypt.hashSync(password, +process.env.SALT_ROUNDS);
  this.passwordHash = hash;
});

// authorize user: confirm email and password
schema.statics.authorize = async function({ email, password }) {
  const user = await this.findOne({ email });
  if(!user) {
    const error = new Error('Invalid email/password');
    error.status = 401;
    throw error;
  }

  const matchingPasswords = await bcrypt.compare(password, user.passwordHash);
  if(!matchingPasswords) {
    const error = new Error('Invalid email/password');
    error.status = 401;
    throw error;
  }

  return user;
};

// find user by token
schema.statics.findByToken = function(token) {
  try {
    const { payload } = verify(token, process.env.APP_SECRET);
    return Promise.resolve(this.hydrate(payload));
  } catch(e) {
    return Promise.reject(e);
  }
};

// send token for authorized user
schema.methods.authToken = function() {
  const token = sign({ payload: this.toJSON() }, process.env.APP_SECRET, {
    expiresIn: '24h'
  });

  return token;
};

module.exports = mongoose.model('User', schema);
