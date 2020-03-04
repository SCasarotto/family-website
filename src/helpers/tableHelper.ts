import { Filter } from 'react-table'

//TODO: Improve
export const customTableFilter = (filter: Filter, row: any, column: any): boolean => {
	//TODO: Update and write tests
	const id = filter.pivotId || filter.id
	const rowValue = row[id]

	if (rowValue !== null && (typeof rowValue === 'string' || typeof rowValue === 'number')) {
		return row[id] !== undefined
			? String(rowValue)
					.toLowerCase()
					.includes(filter.value.toLowerCase())
			: true
	}
	return false
}

export const filterDateColumn = (
	dateFormatFunction: (value: number | Date | undefined | null) => string,
	filter: any,
	rows: any[],
) => {
	//TODO: Update and write tests
	const id = filter.pivotId || filter.id
	const rowValue = rows[id]

	if (rowValue) {
		const dateString = dateFormatFunction(rowValue)
		return dateString.toLowerCase().includes(filter.value.toLowerCase())
	}
	return false
}
