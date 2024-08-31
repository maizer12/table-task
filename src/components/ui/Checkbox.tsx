import React from 'react';
import classNames from 'classnames';

interface CheckboxProps {
	label: string;
	checked: boolean;
	onChange: () => void;
	className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, className = '' }) => {
	return (
		<label className={classNames('flex items-center space-x-2 cursor-pointer', className)}>
			<div className='relative'>
				<input type='checkbox' checked={checked} onChange={onChange} className='absolute opacity-0 h-0 w-0' />
				<div className={classNames('w-6 h-6 border-2 relative rounded-md transition duration-300 ease-in-out', checked ? 'bg-primary border-primary' : 'border-border')}>
					{checked && (
						<svg className='fill-current text-white  w-6 h-6' viewBox='0 0 20 20'>
							<path d='M6 10.8l-2.7-2.7-1.4 1.4L6 13.6l9-9-1.4-1.4z' />
						</svg>
					)}
				</div>
			</div>
			<span className='duration-300 hover:text-primary text-text'>{label}</span>
		</label>
	);
};
