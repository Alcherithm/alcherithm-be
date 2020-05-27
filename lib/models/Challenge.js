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


challengeSchema.statics.getAllChallengesWithUserData = function(userId) {
  return this
    .aggregate([
      {
        '$lookup': {
          'from': 'solutions', 
          'let': {
            'challengeId': '$_id'
          }, 
          'as': 'solutions', 
          'pipeline': [
            {
              '$match': {
                '$expr': {
                  '$and': [
                    {
                      '$eq': [
                        '$challengeId', '$$challengeId'
                      ]
                    }, {
                      '$eq': [
                        '$userId', new mongoose.Types.ObjectId(userId)
                      ]
                    }
                  ]
                }
              }
            }
          ]
        }
      }, {
        '$unwind': {
          'path': '$solutions', 
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$group': {
          '_id': '$_id', 
          'date': {
            '$max': '$solutions.createdAt'
          }, 
          'passed': {
            '$last': '$solutions.passed'
          }, 
          'category': {
            '$last': '$category'
          }, 
          'challengeNumber': {
            '$last': '$challengeNumber'
          }, 
          'instructions': {
            '$last': '$instructions'
          }
        }
      }, {
        '$project': {
          '_id': true, 
          'category': true, 
          'challengeNumber': true, 
          'instructions': true, 
          'solutions': [
            {
              'date': {
                '$dateToString': {
                  'date': '$date', 
                  'format': '%m/%d/%Y'
                }
              }, 
              'passed': '$passed'
            }
          ]
        }
      }, {
        '$sort': {
          'category': 1, 
          'challengeNumber': 1
        }
      }
    ]);
};

module.exports = mongoose.model('Challenge', challengeSchema);
