import { Suspense } from 'react';
import { Loader } from './components/ui';
import { Layout } from './layout';

import { Route, Routes } from 'react-router-dom';
import { ContactsPage, HomePage } from './pages';

function App() {
	return (
		<Layout>
			<Suspense
				fallback={
					<div className='h-[65vh] flex justify-center items-center'>
						<Loader size='medium' />
					</div>
				}
			>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/contacts' element={<ContactsPage />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
