import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../@types';
import { toggleContactAndSave } from '../../utils/contactSaveUtils';

interface ContactsState {
	contacts: User[];
	loading: boolean;
	error: string | null;
}

const initialContacts = JSON.parse(localStorage.getItem('contacts') || '[]');

const initialState: ContactsState = {
	contacts: initialContacts,
	loading: false,
	error: null,
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		toggleContact: (state, action: PayloadAction<User>) => {
			state.contacts = toggleContactAndSave(state.contacts, action.payload);
		},

		removeContact: (state, action: PayloadAction<number>) => {
			state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
		},
	},
});

export const { toggleContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
