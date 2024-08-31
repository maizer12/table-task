import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../@types/User';
import { fetchUsers } from '../../services/userService';

interface UserState {
	users: User[];
	loading: boolean;
	error: string | null;
	search: string;
}

const initialState: UserState = {
	users: [],
	loading: false,
	error: null,
	search: '',
};

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.loading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload || 'Unknown error';
			});
	},
});

export const { setSearch } = userSlice.actions;

export default userSlice.reducer;
