exports.createErrand = (req, res) => {
  const { type, priority } = req.body;
  res.status(201).json({ message: 'Errand created', data: { type, priority } });
};

exports.getErrands = (req, res) => {
  res.status(200).json({ errands: [] });
};
