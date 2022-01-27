import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './configureStore';
import ListGroup from './utils/ListGroup';
import Pagination from './utils/pagination';
import { paginate } from './utils/paginate';

import _ from 'lodash';
import SearchBox from './SearchBox';
import { SortColumn } from './utils/interfaces';
import StudentTable from './UserTable';

const PersonList = () => {
	const users = useSelector((state: RootState) => state);

	const genders = [
		{ name: 'All Genders', value: 'All Genders' },
		{ name: 'Male', value: 'Male' },
		{ name: 'Female', value: 'Female' },
	];

	const courses = [
		{ name: 'All Courses', value: 'All Courses' },
		{ name: 'React', value: 'React' },
		{ name: 'Angular', value: 'Angular' },
		{ name: 'Vue', value: 'Vue' },
	];

	const [pageSize] = useState(12);
	const [currentPage, setCurrentPage] = useState(1);

	const [selectedCourse, setSelectedCourse] = useState(courses[0].value);
	const [selectGender, setSelectGender] = useState(genders[0].value);
	const [sortColumn, setSortColumn] = useState<SortColumn>({
		path: 'title',
		order: 'asc',
	});

	const [searchQuery, setSearchQuery] = useState('');

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleCoursesSelect = (course: string): void => {
		setSelectedCourse(course);
	};

	const handleSelectGender = (gender: string) => {
		setSelectGender(gender);
		setCurrentPage(1);
	};

	const onSort = (sortColumn: SortColumn) => {
		setSortColumn(sortColumn);
	};

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		setCurrentPage(1);
	};

	let filtered = searchQuery
		? users.filter((user) =>
				user.name.toLowerCase().startsWith(searchQuery.toLowerCase())
		  )
		: selectGender === genders[0].value && selectedCourse === courses[0].value
		? users
		: selectGender !== genders[0].value && selectedCourse === courses[0].value
		? users.filter((user) => user.gender === selectGender)
		: selectGender === genders[0].value && selectedCourse !== courses[0].value
		? users.filter((user) => user.course === selectedCourse)
		: users.filter(
				(user) => user.gender === selectGender && user.course === selectedCourse
		  );

	const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

	const paginateUsers = paginate(sorted, currentPage, pageSize);

	return (
		<div>
			<SearchBox value={searchQuery} onChange={handleSearch} />
			<div className="row col-md-10">
				<div className="col-2">
					<ListGroup
						items={courses}
						selectedItem={selectedCourse}
						onItemSelect={handleCoursesSelect}
					/>
					<br />
					<ListGroup
						items={genders}
						selectedItem={selectGender}
						onItemSelect={handleSelectGender}
					/>
				</div>
				<div className="col">
					<StudentTable
						paginateUsers={paginateUsers}
						sortColumn={sortColumn}
						onSort={onSort}
					/>

					<Pagination
						itemsCount={filtered.length}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default PersonList;
