import React from 'react';
import { Button, Table, Title } from '../../components/ui';
import { USER_TABLE_HEADERS as columns } from '../../constants/tableColumns';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { User } from '../../@types';
import { UserCheck } from 'lucide-react';
import { toggleContact } from '../../store/slices/contactsSlice';

const Home: React.FC = () => {
	const { contacts } = useAppSelector(state => state.contacts);
	const dispatch = useAppDispatch();

	const onRemoveContact = (user: User) => {
		dispatch(toggleContact(user));
	};

	return (
		<>
			<div className='flex justify-between items-center mb-8'>
				<Title>Your Contacts:</Title>
			</div>
			<Table
				headers={columns}
				data={contacts}
				renderActions={row => (
					<Button onClick={() => onRemoveContact(row)} justIcon={true} variant='outline'>
						<UserCheck />
					</Button>
				)}
			/>
		</>
	);
};

export default Home;
