import React, { useState } from 'react'
import { TEPanelWrapper, TEPanel, useTEPopups } from 'react-tec'

import { TEReactTable } from 'components'

import { useBarTitle } from 'hooks'
import { Message } from 'interfaces'
import { customTableFilter } from 'helpers'

import { useMessages } from './hooks'
import { tableColumns } from './tableConfigs'
import { confirmDeleteMessage } from './requests'

import { EditMessagePopup } from './EditMessagePopup'

export const Messages = () => {
	useBarTitle('Messages')
	const popupFunctions = useTEPopups()
	const { messageArray, messagesLoaded } = useMessages()

	const [editMessagePopupVisible, setEditMessagePopupVisible] = useState(false)
	const [editMessage, setEditMessage] = useState<Message>()

	const handleEdit = (message: Message) => {
		setEditMessage(message)
		setEditMessagePopupVisible(true)
	}
	const handleDelete = (uid: string) => {
		const data = { uid, popupFunctions }
		confirmDeleteMessage(data)
	}

	return (
		<>
			<TEPanelWrapper>
				<TEPanel title='Messages'>
					<TEReactTable
						data={messageArray}
						columns={tableColumns({ handleEdit, handleDelete })}
						filterable
						defaultFilterMethod={customTableFilter}
						defaultSorted={[
							{
								id: 'dateCreated',
								desc: false,
							},
						]}
						loading={!messagesLoaded}
					/>
				</TEPanel>
			</TEPanelWrapper>
			<EditMessagePopup
				visible={editMessagePopupVisible}
				editMessage={editMessage}
				onSubmit={() => {
					setEditMessage(undefined)
					setEditMessagePopupVisible(false)
				}}
				onClose={() => {
					setEditMessage(undefined)
					setEditMessagePopupVisible(false)
				}}
			/>
		</>
	)
}
