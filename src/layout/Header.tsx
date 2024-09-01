import React from 'react';
import { Container } from '../components/ui';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
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
					<div className='text-lg font-bold text-text flex items-center gap-2 scale-up'>
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
								<NavLink to={item.path} className='text-text text-base border-b-2 border-transparent duration-300 hover:border-primary hover:text-primary [&.active]:border-primary [&.active]:text-primary'>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</header>
	);
};
