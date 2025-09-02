const likedPlaces = new Set(); // Replace with DB in production

exports.recordFeedback = (req, res) => {
  const { errandId, placeId, feedback, comment } = req.body;

  // Store feedback (mock)
  console.log('Feedback received:', { errandId, placeId, feedback, comment });

  // Learn from feedback
  if (feedback === 'positive') {
    likedPlaces.add(placeId);
  }

  res.status(200).json({ message: 'Feedback recorded' });
};

exports.getUserPreferences = (userId) => {
  return {
    likedPlaces: Array.from(likedPlaces),
    errandType: 'pharmacy', // mock default
  };
};
