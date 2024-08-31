import { TableColumn } from '../@types';

export const matchesGlobalSearch = <T>(item: T, headers: TableColumn[], search: string): boolean => {
	return headers.some(header => {
		const value = item[header.key as keyof T];
		return value?.toString().toLowerCase().includes(search.toLowerCase());
	});
};
