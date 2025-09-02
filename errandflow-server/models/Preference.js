const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
  userId: String,
  likedPlaces: [String],
  dislikedCategories: [String],
});

module.exports = mongoose.model('Preference', preferenceSchema);
