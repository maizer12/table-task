import React from 'react';
import { Header } from './Header';
import { Container } from '../components/ui';

type LayoutProps = {
	children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-1 bg-bg py-8 w-full max-w-full overflow-hidden'>
				<Container>{children}</Container>
			</main>
		</div>
	);
};
