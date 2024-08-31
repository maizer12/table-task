import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
	hiddenColumns: string[];
	globalSearch: string;
}

const initialState: FilterState = {
	hiddenColumns: [],
	globalSearch: '',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		toggleColumnVisibility: (state, action: PayloadAction<string>) => {
			if (state.hiddenColumns.includes(action.payload)) {
				state.hiddenColumns = state.hiddenColumns.filter(col => col !== action.payload);
			} else {
				state.hiddenColumns.push(action.payload);
			}
		},
		setGlobalSearch: (state, action: PayloadAction<string>) => {
			state.globalSearch = action.payload;
		},
		resetFilters: state => {
			state.globalSearch = '';
			state.hiddenColumns = [];
		},
	},
});

export const { toggleColumnVisibility, setGlobalSearch, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
