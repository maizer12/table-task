import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';
import classNames from 'classnames';

type AlertType = 'success' | 'error' | 'info' | 'warning';

interface AlertProps {
	type: AlertType;
	message: string;
	className?: string;
}

const iconMap = {
	success: CheckCircle,
	error: XCircle,
	info: Info,
	warning: AlertCircle,
};

export const Alert: React.FC<AlertProps> = ({ type, message, className }) => {
	const IconComponent = iconMap[type];

	return (
		<div
			className={classNames(
				'flex items-center p-4 rounded border fade-in',
				{
					'bg-green-100 border-green-400 text-green-700': type === 'success',
					'bg-red-100 border-red-400 text-red-700': type === 'error',
					'bg-white border-primary text-primary': type === 'info',
					'bg-yellow-100 border-yellow-400 text-yellow-700': type === 'warning',
				},
				className
			)}
		>
			<IconComponent className='w-5 h-5 mr-3' />
			<span>{message}</span>
		</div>
	);
};
