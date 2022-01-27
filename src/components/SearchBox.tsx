import { SearchBar } from './utils/interfaces';

const SearchBox = ({ value, onChange }: SearchBar) => {
	return (
		<div
			className="search"
			style={{ display: 'flex', justifyContent: 'flex-start', margin: 30 }}
		>
			<input
				style={{ width: 400, height: 40, fontSize: 25 }}
				type="text"
				name="query"
				className="search-bar"
				placeholder="Search..."
				value={value}
				onChange={(e) => onChange(e.currentTarget.value)}
			></input>
		</div>
	);
};

export default SearchBox;
