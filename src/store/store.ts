import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import filterReducer from './slices/filterSlice';
import contactsReducer from './slices/contactsSlice';

export const store = configureStore({
	reducer: {
		users: userReducer,
		filter: filterReducer,
		contacts: contactsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
