function scorePlace(place, userContext) {
  let score = 0;
  if (place.openNow) score += 30;
  if (place.distance < 1000) score += 25;
  if (place.rating >= 4.0) score += 20;
  if (place.category === userContext.errandType) score += 15;
  if (userContext.likedPlaces?.includes(place.fsq_id)) score += 10;
  return Math.min(score, 100);
}

function getFallbackSuggestions(places, userContext) {
  return places
    .map(p => ({ ...p, confidence: scorePlace(p, userContext) }))
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 3);
}

module.exports = { scorePlace, getFallbackSuggestions };
