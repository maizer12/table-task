import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './api';
import { User } from '../@types/User';

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>('users/fetchUsers', async (_, { rejectWithValue }) => {
	try {
		const response = await axiosInstance.get<User[]>('/users');
		return response.data;
	} catch (error) {
		console.log(error);
		return rejectWithValue('Failed to fetch users');
	}
});
