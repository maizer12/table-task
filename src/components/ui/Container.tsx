import React from 'react';

type ContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
	return <div className={`max-w-[1440px] w-full mx-auto px-4 ${className}`}>{children}</div>;
};
