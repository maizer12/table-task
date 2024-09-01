import React from 'react';
import classNames from 'classnames';

interface LoaderProps {
	size?: 'small' | 'medium' | 'large';
	className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 'medium', className }) => {
	const loaderClass = classNames(
		'border-t-4 border-primary rounded-full fade-in animate-spin',
		{
			'w-6 h-6': size === 'small',
			'w-12 h-12': size === 'medium',
			'w-16 h-16': size === 'large',
		},
		className
	);

	return <div className={loaderClass}></div>;
};
