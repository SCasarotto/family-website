import React from 'react'
import { TEPanelWrapper, TEPanel } from 'react-tec'

import { TEReactTable } from 'components'

import { useBarTitle } from 'hooks'

import { customTableFilter } from 'helpers'
import { useRSVPs } from './hooks'
import { tableColumns } from './tableConfigs'
import { RSVP } from 'interfaces'

export const RSVPs = () => {
	useBarTitle('RSVPs')
	const { rsvpArray, rsvpLoaded } = useRSVPs()

	const handleEdit = async (rsvp: RSVP) => {}
	const handleDelete = async (uid: string) => {}

	return (
		<>
			<TEPanelWrapper>
				<TEPanel title='RSVPs'>
					<TEReactTable
						data={rsvpArray}
						columns={tableColumns({ handleEdit, handleDelete })}
						filterable
						defaultFilterMethod={customTableFilter}
						defaultSorted={[
							{
								id: 'dateCreated',
								desc: false,
							},
						]}
						loading={!rsvpLoaded}
					/>
				</TEPanel>
			</TEPanelWrapper>
		</>
	)
}
