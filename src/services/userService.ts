import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './api';
import { User } from '../@types/User';
import { ApiRoutes } from './api-routes';

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>('users/fetchUsers', async (_, { rejectWithValue }) => {
	try {
		const response = await axiosInstance.get<User[]>(ApiRoutes.USERS);
		return response.data;
	} catch (error) {
		console.log(error);
		return rejectWithValue('Failed to fetch users');
	}
});
