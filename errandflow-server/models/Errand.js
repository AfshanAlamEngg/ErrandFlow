const mongoose = require('mongoose');

const errandSchema = new mongoose.Schema({
  type: String,
  priority: String,
  timeWindow: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Errand', errandSchema);
