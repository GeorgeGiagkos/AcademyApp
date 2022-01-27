import _ from 'lodash';

export const paginate = (
	items: {
		name: string;
		email: string;
		course: string;
		address: string;
		city: string;
	}[],
	pageNumber: number,
	pageSize: number
) => {
	const startIndex = (pageNumber - 1) * pageSize;
	return _(items).slice(startIndex).take(pageSize).value();
};
