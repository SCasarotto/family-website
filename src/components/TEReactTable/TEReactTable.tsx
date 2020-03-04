import React from 'react'
import ReactTable from 'react-table'

//TODO: Rewrite for react-table v7. Features to think about:
// Client Side Pagination
// Client Side Sort
// Client Size Search
// Column Resizing
// Easy Column / Header styling (right align)
//
//Additional thinks to think about adding:
// Dynamic and locally stored active table column
//	- I am thinking this would use some internal hook to store
//		a list of active columns and would then dynamically
//		adjust the columns array that comes in.
//	- As these are adjusted store the config in local storage
//	- Require a unique table name used for the local config
//	- Maybe only locally store config if there is a name provided.
// Ability to reorder coluns
//	- This would be manages and stored with the data above.
//		Likely a stringified array of the active column ids
//
// Look for examples to do these things and maybe doucment
//	them here to prepare for the component reqrite

const showPagination = (dataArray: any[], defaultPageSize = 10) => {
	if (!dataArray || defaultPageSize === 1 || dataArray.length <= defaultPageSize) {
		return false
	}

	return true
}

//TODO: Fix ... actually just rebuild with v7
export const TEReactTable: React.FC<any> = (props) => {
	return (
		<ReactTable showPagination={showPagination(props.data, props.defaultPageSize)} {...props} />
	)
}

TEReactTable.defaultProps = {
	defaultPageSize: 10,
}
