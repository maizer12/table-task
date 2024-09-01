import React from 'react';
import classNames from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'accent' | 'outline';
	size?: 'small' | 'medium' | 'large';
	justIcon?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, justIcon = false, variant = 'primary', size = 'medium', className, ...props }) => {
	const buttonClass = classNames(
		'px-4 py-2 rounded border border-transparent  font-semibold focus:outline-none duration-300',
		{
			'!border-primary text-primary hover:bg-primary hover:text-white': variant === 'outline',
			'bg-primary text-white hover:bg-secondary': variant === 'primary',
			'bg-secondary text-white': variant === 'secondary',
			'bg-accent text-white': variant === 'accent',
			'text-sm': size === 'small',
			'text-base': size === 'medium',
			'text-lg': size === 'large',
			'opacity-50 cursor-not-allowed': props.disabled,
			'!px-2': justIcon,
		},
		className
	);

	return (
		<button className={buttonClass} {...props}>
			{children}
		</button>
	);
};
