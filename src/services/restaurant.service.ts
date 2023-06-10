import {IRestaurant} from '../interfaces/iRestaurant';
import RestauranModel from '../models/Restaurant';

interface IQuery {
	limit?: number;
	skip?: number;
	zipcode: string;
	search?: string;
}

const isValidZipcode = (zipcode: string): boolean => {
	if(zipcode.length != 5) {
		return false;
	}

	return true;
};


export const getRestaurantsByZipcodeService = async (query: IQuery): Promise<IRestaurant[]> => {
	const limit = Number(query.limit) || 20;
	const skip = Number(query.skip) || 0;
	const zipcode = query.zipcode;

	if(!isValidZipcode(zipcode)) {
		throw new Error('Must provide valid zipcode');
	}

	return RestauranModel.find({zipcode}).limit(limit).skip(skip);
};
