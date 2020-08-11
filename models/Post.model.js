// models/User.model.js

const { Schema, model, Mongoose } = require('mongoose');

const postSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  creatorId: {
    type: String,
    required: true
  },
  picPath: {
    type: String,
    required: true
  },
  picName: {
    type: String,
    required: true
  }
});

module.exports = model('Post', postSchema);
