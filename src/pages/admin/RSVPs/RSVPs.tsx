import React, { useState } from 'react'
import { TEPanelWrapper, TEPanel, useTEPopups } from 'react-tec'

import { TEReactTable } from 'components'

import { useBarTitle } from 'hooks'
import { customTableFilter } from 'helpers'
import { RSVP } from 'interfaces'

import { useRSVPs } from './hooks'
import { tableColumns } from './tableConfigs'
import { confirmDeleteRSVP } from './requests'
import { EditRSVPPopup } from './EditRSVPPopup'

export const RSVPs = () => {
	useBarTitle('RSVPs')
	const popupFunctions = useTEPopups()
	const { rsvpArray, rsvpLoaded } = useRSVPs()
	const [editRSVPPopupVisible, setEditRSVPPopupVisible] = useState(false)
	const [editRSVP, setEditRSVP] = useState<RSVP>()

	const handleEdit = (rsvp: RSVP) => {
		setEditRSVPPopupVisible(true)
		setEditRSVP(rsvp)
	}
	const handleDelete = (uid: string) => {
		const data = { uid, popupFunctions }
		confirmDeleteRSVP(data)
	}

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
			<EditRSVPPopup
				visible={editRSVPPopupVisible}
				editRSVP={editRSVP}
				onSubmit={() => {
					setEditRSVPPopupVisible(false)
					setEditRSVP(undefined)
				}}
				onClose={() => {
					setEditRSVPPopupVisible(false)
					setEditRSVP(undefined)
				}}
			/>
		</>
	)
}
