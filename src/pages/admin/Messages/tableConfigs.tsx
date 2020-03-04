import React from 'react'

import { TETableButton } from 'components'

import { filterDateColumn, convertToDateTimeShort } from 'helpers'
import { Message } from 'interfaces'
import { Filter } from 'react-table'

interface Args {
	handleEdit(message: Message): void
	handleDelete(uid: string): void
}
export const tableColumns = ({ handleEdit, handleDelete }: Args) => [
	{
		id: 'dateCreated',
		Header: 'Date Created',
		filterMethod: (filter: Filter, rows: any[]) =>
			filterDateColumn(convertToDateTimeShort, filter, rows),
		accessor: 'date_created',
		Cell: (d: { value: number }) => convertToDateTimeShort(d.value),
	},
	{
		Header: 'Name',
		accessor: 'createdBy',
	},
	{
		Header: 'Message',
		accessor: 'message',
	},
	{
		id: 'actions',
		Header: '',
		accessor: 'uid',
		sortable: false,
		filterable: false,
		className: 'actionCell',
		width: 80,
		Cell: (d: { value: string; original: Message }) => (
			<>
				<TETableButton onClick={() => handleEdit(d.original)} icon='edit' />
				<TETableButton onClick={() => handleDelete(d.value)} icon='delete' />
			</>
		),
	},
]
