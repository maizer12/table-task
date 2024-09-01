export const updateHiddenColumns = (hiddenColumns: string[], column: string): string[] => {
	const updatedColumns = hiddenColumns.includes(column) ? hiddenColumns.filter(col => col !== column) : [...hiddenColumns, column];

	localStorage.setItem('hiddenColumns', JSON.stringify(updatedColumns));
	return updatedColumns;
};
