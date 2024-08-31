import React, { useRef, useState } from 'react';
import { Button } from './Button';
import { useClickOutside } from '../../hooks';

interface DropdownProps {
	label: string;
	children: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const handleToggle = () => setIsOpen(!isOpen);

	useClickOutside(ref, () => setIsOpen(false));

	return (
		<div className='relative z-10' ref={ref}>
			<Button onClick={handleToggle}>{label}</Button>
			{isOpen && <div className='absolute bg-white border w-[180px] rounded shadow p-2 mt-2'>{children}</div>}
		</div>
	);
};
