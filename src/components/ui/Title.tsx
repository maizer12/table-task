import React from 'react';
import classNames from 'classnames';

interface TitleProps {
	element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: React.ReactNode;
	className?: string;
}

export const Title: React.FC<TitleProps> = ({ element = 'h1', children, className }) => {
	const Tag = element;

	const titleClass = classNames(
		{
			'text-4xl': element === 'h1',
			'text-3xl': element === 'h2',
			'text-2xl': element === 'h3',
			'text-xl': element === 'h4' || element === 'h5' || element === 'h6',
		},
		'font-bold',
		className
	);

	return <Tag className={titleClass}>{children}</Tag>;
};
