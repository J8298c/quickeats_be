const express = require('express');

const restaurantRouter = express.Router();

restaurantRouter.get('/near/:borough', async (req, res) => {
  try {
    res.status(200).json({ message: 'hello restaurants' });
  } catch (error) {
    res.status(500).json({ error: 'server error occurred' });
  }
});

restaurantRouter.get('/:id', async (req, res) => {
  try {
    res.status(200).json({ message: 'hello restaurants' });
  } catch (error) {
    res.status(500).json({ error: 'server error occurred' });
  }
});

module.exports = restaurantRouter;
