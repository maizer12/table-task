import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateHiddenColumns } from '../../utils/filterUtils';

interface FilterState {
	hiddenColumns: string[];
	globalSearch: string;
}

const initialHiddenColumns = JSON.parse(localStorage.getItem('hiddenColumns') || '[]');

const initialState: FilterState = {
	hiddenColumns: initialHiddenColumns,
	globalSearch: '',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		toggleColumnVisibility: (state, action: PayloadAction<string>) => {
			state.hiddenColumns = updateHiddenColumns(state.hiddenColumns, action.payload);
		},
		setGlobalSearch: (state, action: PayloadAction<string>) => {
			state.globalSearch = action.payload;
		},
		resetFilters: state => {
			state.hiddenColumns = [];
			state.globalSearch = '';
			localStorage.removeItem('hiddenColumns');
		},
	},
});

export const { toggleColumnVisibility, setGlobalSearch, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
