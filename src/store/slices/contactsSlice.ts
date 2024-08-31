import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../@types';

interface ContactsState {
	contacts: User[];
	loading: boolean;
	error: string | null;
}

const initialState: ContactsState = {
	contacts: [],
	loading: false,
	error: null,
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		toggleContact: (state, action: PayloadAction<User>) => {
			const existingContactIndex = state.contacts.findIndex(contact => contact.id === action.payload.id);

			if (existingContactIndex !== -1) {
				state.contacts.splice(existingContactIndex, 1);
			} else {
				state.contacts.push(action.payload);
			}
		},

		removeContact: (state, action: PayloadAction<number>) => {
			state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
		},
	},
});

export const { toggleContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
