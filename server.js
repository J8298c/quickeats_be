const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const restaurantRouter = require('./controllers/restaurant.controller');

dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error(err);
  });

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/api/restaurants', restaurantRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
