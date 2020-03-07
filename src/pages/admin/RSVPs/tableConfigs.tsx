import React from 'react'

import { TETableButton } from 'components'

import { filterDateColumn, convertToDateTimeShort } from 'helpers'
import { RSVP } from 'interfaces'
import { Filter } from 'react-table'

interface Args {
	handleEdit(message: RSVP): void
	handleDelete(uid: string): void
}
export const tableColumns = ({ handleEdit, handleDelete }: Args) => [
	{
		id: 'dateCreated',
		Header: 'Date Created',
		filterMethod: (filter: Filter, rows: any[]) =>
			filterDateColumn(convertToDateTimeShort, filter, rows),
		accessor: 'dateCreated',
		Cell: (d: { value: number }) => convertToDateTimeShort(d.value),
	},
	{
		Header: 'Name',
		accessor: 'name',
	},
	{
		Header: 'Food Choice',
		accessor: 'foodChoice',
	},
	{
		Header: 'Comment',
		accessor: 'comment',
	},
	{
		id: 'status',
		Header: 'Status',
		accessor: (d: RSVP) => {
			switch (d.status) {
				case 0:
					return 'Submitted'
				case 1:
					return 'Transferred'
				default:
					return d.status
			}
		},
	},
	{
		id: 'actions',
		Header: '',
		accessor: 'uid',
		sortable: false,
		filterable: false,
		className: 'actionCell',
		width: 80,
		Cell: (d: { value: string; original: RSVP }) => (
			<>
				<TETableButton onClick={() => handleEdit(d.original)} icon='edit' />
				<TETableButton onClick={() => handleDelete(d.value)} icon='delete' />
			</>
		),
	},
]
