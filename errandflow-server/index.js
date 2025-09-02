const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const errandsRoutes = require('./routes/errands');
const suggestionsRoutes = require('./routes/suggestions');
const routeRoutes = require('./routes/route');

app.use('/api/errands', errandsRoutes);
app.use('/api/suggestions', suggestionsRoutes);
app.use('/api/route', routeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
