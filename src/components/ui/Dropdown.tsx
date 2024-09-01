import React, { useRef, useState } from 'react';
import { Button } from './Button';
import { useClickOutside } from '../../hooks';
import { ChevronDown } from 'lucide-react';

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
			<Button onClick={handleToggle} className='flex items-center scale-up'>
				{label}
				<ChevronDown className={`ml-2 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
			</Button>
			<div className={`absolute bg-white border w-[180px] rounded shadow p-2 mt-2 transition-opacity duration-300 transform ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`} style={{ transitionTimingFunction: 'ease-in-out' }}>
				{children}
			</div>
		</div>
	);
};
