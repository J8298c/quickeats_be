interface IAddress {
	building: string;
	coord: number[];
	street: string;
	zipcode: string;
}


interface IGrade {
	date: Date;
	grade: string;
	score: number;
}

export interface IRestaurant {
	_id: string;
	address: IAddress;
	borough: string;
	cuisine: string;
	grades: IGrade[];
	name: string;
	restaurant_id: string;
}
