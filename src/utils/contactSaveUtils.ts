import { User } from '../@types';

export const toggleContactAndSave = (contacts: User[], contact: User): User[] => {
	const existingIndex = contacts.findIndex(existingContact => existingContact.id === contact.id);

	const updatedContacts = existingIndex !== -1 ? contacts.filter((_, index) => index !== existingIndex) : [...contacts, contact];

	localStorage.setItem('contacts', JSON.stringify(updatedContacts));

	return updatedContacts;
};
