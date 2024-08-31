import { useEffect } from 'react';
import { Title } from '../../components/ui';
import { fetchUsers } from '../../services/userService';
import { ColumnSelector } from '../../components/ColumnSelector';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GlobalSearch, UsersTable } from '../../components';
import { USER_TABLE_HEADERS as columns } from '../../constants/tableColumns';
import { User } from '../../@types';
import { toggleContact } from '../../store/slices/contactsSlice';

function Home() {
	const { users, loading } = useAppSelector(state => state.users);
	const { contacts } = useAppSelector(state => state.contacts);
	const { hiddenColumns, globalSearch } = useAppSelector(state => state.filter);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const toggleContactHandler = (user: User) => {
		dispatch(toggleContact(user));
	};

	return (
		<>
			<Title className='mb-8'>Users:</Title>
			<div className='flex items-center justify-between mb-4'>
				<GlobalSearch />
				<ColumnSelector />
			</div>
			<UsersTable users={users} loading={loading} headers={columns} globalSearch={globalSearch} hiddenColumns={hiddenColumns} onToggleContact={toggleContactHandler} contacts={contacts} />
		</>
	);
}

export default Home;
