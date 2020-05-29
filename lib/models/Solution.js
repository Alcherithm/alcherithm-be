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

solutionSchema.statics.getPassingSolutionsByCategory = function(userId) {
  return this
    .aggregate([
      {
        '$match': {
          'userId': new new mongoose.Types.ObjectId(userId)
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
          '_id': {
            'challengeId': '$challengeId', 
            'category': '$challenge.category'
          }, 
          'challengeNumber': {
            '$last': '$challenge.challengeNumber'
          }, 
          'solutions': {
            '$push': '$passed'
          }
        }
      }, {
        '$project': {
          'challengeId': '$_id.challengeId', 
          'category': '$_id.category', 
          'challengeNumber': true, 
          'passed': {
            '$anyElementTrue': '$solutions'
          }
        }
      }, {
        '$match': {
          'passed': true
        }
      }, {
        '$group': {
          '_id': '$category', 
          'count': {
            '$sum': 1
          }
        }
      }
    ]); 
};


module.exports = mongoose.model('Solution', solutionSchema);
