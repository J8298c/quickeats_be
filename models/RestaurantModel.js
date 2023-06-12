const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: {},
  borough: String,
  cuisine: String,
  grades: [],
  name: String,
  restaurant_id: String,
});

module.exports = mongoose.model('Restaurants', RestaurantSchema);
