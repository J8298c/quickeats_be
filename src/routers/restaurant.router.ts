import express from 'express';
import {getRestaurantsNearZipcode} from '../controllers/restaurant.controller';

const restaurantRouter = express.Router();

restaurantRouter.get('/near/:zipcode', getRestaurantsNearZipcode);

export default restaurantRouter;
