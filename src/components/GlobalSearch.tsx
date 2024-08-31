import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setGlobalSearch } from '../store/slices/filterSlice';

export const GlobalSearch: React.FC = () => {
	const dispatch = useAppDispatch();
	const globalSearch = useAppSelector(state => state.filter.globalSearch);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setGlobalSearch(event.target.value));
	};

	return (
		<div className='mb-4 max-w-[320px] w-full'>
			<input type='text' placeholder='Search across all columns' value={globalSearch} onChange={handleSearchChange} className='p-2 border rounded w-full focus:placeholder:opacity-0 placeholder:duration-300' />
		</div>
	);
};
