import { Request, Response } from 'express';

const errorMessageDefault = { error: 'System Error'}

export const getRestaurantsNearZipcode = async (req: Request, res: Response): Promise<void> => {
	try {
		res.send('hello restaurants');
	} catch (err) {
		res.status(500).json(errorMessageDefault);
	}
};
