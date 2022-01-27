import _ from 'lodash';
import { ListGroupProps } from './interfaces';

const ListGroup = ({ items, onItemSelect, selectedItem }: ListGroupProps) => {
	return (
		<ul className="list-group">
			{items.map((item) => (
				<li
					key={item.name}
					className={
						item.value === selectedItem
							? 'list-group-item active'
							: 'list-group-item'
					}
					onClick={() => onItemSelect(item.value)}
				>
					{item.name}
				</li>
			))}
		</ul>
	);
};

export default ListGroup;
