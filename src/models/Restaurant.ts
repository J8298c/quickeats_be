import mongoose from 'mongoose';
import {IRestaurant} from '../interfaces/iRestaurant';

const RestaurantSchema = new mongoose.Schema<IRestaurant>({
	address: [],
	borough: String,
	cuisine: String,
	grades: [],
	name: String,
	restaurant_id: String
});

export default mongoose.model('Restaurant', RestaurantSchema);
