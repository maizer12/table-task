import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleColumnVisibility } from '../store/slices/filterSlice';
import { Checkbox, Dropdown } from './ui';
import { USER_TABLE_HEADERS as columns } from '../constants/tableColumns';

export const ColumnSelector: React.FC = () => {
	const hiddenColumns = useAppSelector(state => state.filter.hiddenColumns);
	const dispatch = useAppDispatch();

	return (
		<Dropdown label='Select Columns'>
			{columns.map(column => (
				<label key={column.key} className='block'>
					<Checkbox key={column.key} className='mb-2' label={column.label} checked={!hiddenColumns.includes(column.key)} onChange={() => dispatch(toggleColumnVisibility(column.key))} />
				</label>
			))}
		</Dropdown>
	);
};
