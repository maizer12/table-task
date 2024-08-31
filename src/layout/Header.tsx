import React from 'react';
import { Container } from '../components/ui';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { UserCheck } from 'lucide-react';

const menuItems = [
	{ name: 'Home', path: '/' },
	{ name: 'Contacts', path: '/contacts' },
];

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className = '' }) => {
	return (
		<header className={classNames('bg-background border-b border-border text-white p-4', className)}>
			<Container className='flex justify-between items-center'>
				<Link to='/'>
					<div className='text-lg font-bold text-text flex items-center gap-2'>
						<div className='w-9 h-9 rounded-[50%] flex justify-center items-center border border-primary'>
							<UserCheck className='text-primary' />
						</div>
						ConnectPro
					</div>
				</Link>
				<nav>
					<ul className='flex space-x-4'>
						{menuItems.map(item => (
							<li key={item.name}>
								<Link to={item.path} className='text-text text-base active:border-primary border-b'>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</header>
	);
};
