const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  errandId: String,
  placeId: String,
  feedback: String,
  comment: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
