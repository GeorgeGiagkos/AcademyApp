
export interface InitialValues {
	name: string;
	email: string;
	password: string;
	address?: string;
	course: string;
	gender: string;
	city?: string;
	zip?: string;
}

export interface Errors {
	[key: string]: string;
}

export interface CoursesArray {
	name: string;
	value: string;
}

export interface ListGroupProps {
	items: CoursesArray[];
	selectedItem: string;
	onItemSelect: (arg0: string) => void;
}

export interface SearchBar {
	value: string;
	onChange: (query: string) => void;
}

type order = 'asc' | 'desc';

export interface SortColumn {
	path: string;
	order: order;
}

export interface UserTable {
	paginateUsers: {
		name: string;
		email: string;
		course: string;
		gender?: string;
		address: string;
		city: string;
	}[];

	onSort: (sortColumn: SortColumn) => void;
	sortColumn: {
		path: string;
		order: order;
	};
}
