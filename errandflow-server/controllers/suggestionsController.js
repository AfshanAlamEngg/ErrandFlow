const { getNearbyPlaces } = require('../services/foursquareService');

exports.getSuggestions = async (req, res) => {
  const { latitude, longitude, type } = req.query;

  if (!latitude || !longitude || !type) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  const places = await getNearbyPlaces({
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    query: type,
  });

  res.status(200).json({ places });
};
