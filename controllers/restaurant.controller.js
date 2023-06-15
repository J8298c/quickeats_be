const express = require('express');
const restaurantModel = require('../models/RestaurantModel');

const restaurantRouter = express.Router();

restaurantRouter.get('/near/:borough', async (req, res) => {
  try {
    const { score } = req.query;
    console.log(score, 'the score');
    const query = {
      borough: req.params.borough,
    };
    const restaurants = await restaurantModel.find(query);
    res.status(200).json({ restaurants });
  } catch (error) {
    res.status(500).json({ error: 'server error occurred' });
  }
});

restaurantRouter.get('/:id', async (req, res) => {
  try {
    // eslint-disable-next-line no-underscore-dangle
    const restaurant = await restaurantModel.findOne({ _id: req.params._id });
    res.status(200).json({ restaurant });
  } catch (error) {
    res.status(500).json({ error: 'server error occurred' });
  }
});

module.exports = restaurantRouter;
