const axios = require('axios');
const FSQ_API_KEY = process.env.FSQ_API_KEY;
const BASE_URL = 'https://api.foursquare.com/v3/places/search';

exports.getNearbyPlaces = async ({ latitude, longitude, query }) => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: FSQ_API_KEY,
      },
      params: {
        query,
        ll: `${latitude},${longitude}`,
        radius: 3000,
        sort: 'RELEVANCE',
        open_now: true,
        limit: 10,
      },
    });

    const places = response.data.results.map((place) => ({
      name: place.name,
      distance: place.distance,
      location: place.location,
      categories: place.categories,
      fsq_id: place.fsq_id,
    }));

    return places;
  } catch (error) {
    console.error('Foursquare API error:', error.message);
    return [];
  }
};
