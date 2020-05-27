const mongoose = require('mongoose');

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


solutionSchema.statics.getChallengesByUser = function(userId) {
  return this
    .aggregate([
      {
        '$match': {
          'userId': new mongoose.Types.ObjectId(userId)
        }
      }, {
        '$sort': {
          'createdAt': -1
        }
      }, {
        '$lookup': {
          'from': 'challenges', 
          'localField': 'challengeId', 
          'foreignField': '_id', 
          'as': 'challenge'
        }
      }, {
        '$unwind': {
          'path': '$challenge'
        }
      }, {
        '$group': {
          '_id': '$challengeId', 
          'category': {
            '$last': '$challenge.category'
          }, 
          'challengeNumber': {
            '$last': '$challenge.challengeNumber'
          }, 
          'instructions': {
            '$last': '$challenge.instructions'
          },
          'solutions': {
            '$push': {
              'solution': '$solution', 
              'passed': '$passed', 
              'date': {
                '$dateToString': {
                  'date': '$createdAt', 
                  'format': '%m/%d/%Y'
                }
              }
            }
          }
        }
      }
    ]);
};

module.exports = mongoose.model('Solution', solutionSchema);
