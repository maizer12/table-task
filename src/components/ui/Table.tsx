import React, { useState } from 'react';
import { Loader } from './Loader';

type TableHeader = {
	label: string;
	key: string;
};

type TableProps<T> = {
	headers: TableHeader[];
	data: Array<T>;
	className?: string;
	isLoading?: boolean;
	renderActions?: (row: T) => React.ReactNode;
};

export const Table = <T,>({ headers, data, isLoading = false, className = '', renderActions }: TableProps<T>) => {
	const [searchValues, setSearchValues] = useState<Record<string, string>>({});

	const handleInputChange = (key: string, value: string) => {
		setSearchValues(prevValues => ({
			...prevValues,
			[key]: value,
		}));
	};

	const filteredData = data.filter(row =>
		headers.every(header =>
			String(row[header.key as keyof T])
				.toLowerCase()
				.includes((searchValues[header.key] || '').toLowerCase())
		)
	);

	return (
		<div className='overflow-x-auto table-scroll'>
			<table className={`min-w-full  bg-white fade-in w-full max-w-full border-border border text-nowrap ${className}`}>
				<thead>
					<tr>
						{headers.map(header => (
							<th key={header.key} className='py-2 px-4 border-b text-left min-w-[140px]'>
								{header.label}
								<div>
									<input type='text' placeholder={`Search ${header.label}`} value={searchValues[header.key] || ''} onChange={e => handleInputChange(header.key, e.target.value)} className='mt-1 p-1 w-full border rounded text-sm font-normal placeholder:duration-300 focus:placeholder:opacity-0 pl-2' />
								</div>
							</th>
						))}
						{renderActions && <th className='py-2 px-4 border-b  text-center'>Actions</th>}
					</tr>
				</thead>
				<tbody className='relative'>
					{isLoading ? (
						<tr className='w-full h-[420px] relative'>
							<td colSpan={headers.length}>
								<div className='absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>
									<Loader />
								</div>
							</td>
						</tr>
					) : (
						filteredData.map((row, index) => (
							<tr key={index} className='hover:bg-gray-50'>
								{headers.map(header => (
									<td key={header.key} className='py-2 px-4 border-b'>
										{!!row && row[header.key as keyof T] ? String(row[header.key as keyof T]) : ''}
									</td>
								))}
								{renderActions && (
									<td className='py-2 px-4 border-b'>
										<div className='flex justify-center'>{renderActions(row)}</div>
									</td>
								)}
							</tr>
						))
					)}
					{!isLoading && !data.length && (
						<tr className='w-full h-[420px] relative'>
							<td colSpan={headers.length} className='text-lg text-center'>
								Table is empty!
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
