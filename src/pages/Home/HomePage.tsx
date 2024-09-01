import { useEffect } from 'react';
import { Alert, Button, Title } from '../../components/ui';
import { fetchUsers } from '../../services/userService';
import { ColumnSelector } from '../../components/ColumnSelector';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GlobalSearch, UsersTable } from '../../components';
import { USER_TABLE_HEADERS as columns } from '../../constants/tableColumns';
import { User } from '../../@types';
import { toggleContact } from '../../store/slices/contactsSlice';
import { RotateCcw } from 'lucide-react';
import { resetFilters } from '../../store/slices/filterSlice';

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

	const onReset = () => {
		dispatch(resetFilters());
	};

	return (
		<>
			<div className='flex justify-between items-center mb-8'>
				<Title className='slide-in-bottom'>Users:</Title>
				<Button className='flex gap-2 items-center' onClick={onReset}>
					<RotateCcw className='w-5 h-5 rotate-in' />
					Reset Filters
				</Button>
			</div>
			<div className='flex items-center justify-between mb-4'>
				<GlobalSearch />
				<ColumnSelector />
			</div>
			{hiddenColumns.length === columns.length ? <Alert type='info' message='No columns selected' /> : <UsersTable users={users} loading={loading} headers={columns} globalSearch={globalSearch} hiddenColumns={hiddenColumns} onToggleContact={toggleContactHandler} contacts={contacts} />}
		</>
	);
}

export default Home;
