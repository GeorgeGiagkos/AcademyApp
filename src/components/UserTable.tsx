import { UserTable } from './utils/interfaces';

const StudentTable = ({ paginateUsers, onSort, sortColumn }: UserTable) => {
	const raiseSort = (path: string) => {
		const sortColumns = { ...sortColumn };
		if (sortColumns.path === path)
			sortColumns.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		else {
			sortColumns.path = path;
			sortColumns.order = 'asc';
		}
		onSort(sortColumns);
	};

	return (
		<div className="customTable">
			<table className="table">
				<thead className="thead-dark">
					<tr>
						<th onClick={() => raiseSort('name')}>Name</th>
						<th>Email</th>
						<th>Course</th>
						<th>Gender</th>
						<th onClick={() => raiseSort('address')}>Address</th>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					{paginateUsers.map((user, index) => (
						<tr key={index}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.course}</td>
							<td>{user.gender}</td>
							<td>{user.address}</td>
							<td>{user.city}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
	// }
};

export default StudentTable;
