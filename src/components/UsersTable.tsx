import React, { useMemo } from 'react';
import { UserPlus, UserCheck } from 'lucide-react';
import { User } from '../@types';
import { matchesGlobalSearch } from '../utils/matchesGlobalSearch';
import { Button, Table } from './ui';

interface UsersTableProps {
	users: User[];
	loading: boolean;
	headers: Array<{ label: string; key: string }>;
	globalSearch: string;
	hiddenColumns: string[];
	contacts: User[];
	onToggleContact: (user: User) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({ users, loading, headers, globalSearch, hiddenColumns, contacts, onToggleContact }) => {
	const filteredHeaders = headers.filter(({ key }) => !hiddenColumns.includes(key));

	const filteredUsers = useMemo(() => {
		return users.filter(user => matchesGlobalSearch(user, filteredHeaders, globalSearch));
	}, [users, filteredHeaders, globalSearch]);

	const isInContacts = (user: User) => {
		return contacts.some(contact => contact.id === user.id);
	};

	return (
		<Table
			headers={filteredHeaders}
			data={filteredUsers}
			isLoading={loading}
			renderActions={row => (
				<Button onClick={() => onToggleContact(row)} justIcon={true}>
					{isInContacts(row) ? <UserCheck /> : <UserPlus />}
				</Button>
			)}
		/>
	);
};
