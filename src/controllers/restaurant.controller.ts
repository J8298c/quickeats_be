import { Request, Response } from 'express';
import {getRestaurantsByZipcodeService} from '../services/restaurant.service';

const errorMessageDefault = { error: 'System Error'};

export const getRestaurantsNearZipcode = async (req: Request, res: Response): Promise<void> => {
	try {
		const zipcode = req.params.zipcode;
		const queryObj = { ...req.query, zipcode};
		const restaurants = await getRestaurantsByZipcodeService(queryObj);
		res.status(200).json({ restaurants });
	} catch (err) {
		res.status(500).json(errorMessageDefault);
	}
};
