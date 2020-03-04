import React, { useState, useEffect } from 'react'
import { TEPopupForm, TEInputRow, useTEPopups, TEDatetimeRow, TETextareaRow } from 'react-tec'

import { TEPopupTitle } from 'components'
import { Message } from 'interfaces'

import { saveMessage } from './requests'

interface Props {
	visible: boolean
	onClose(): void
	onSubmit(): void
	editMessage?: Message
}
export const EditMessagePopup = (props: Props) => {
	const { visible, onClose, onSubmit, editMessage } = props

	const popupFunctions = useTEPopups()
	const [dateCreated, setDateCreated] = useState<Date>()
	const [createdBy, setCreatedBy] = useState('')
	const [message, setMessage] = useState('')

	useEffect(() => {
		if (editMessage) {
			const { dateCreated, createdBy, message } = editMessage

			setDateCreated(dateCreated ? new Date(dateCreated) : undefined)
			setCreatedBy(createdBy)
			setMessage(message)
		} else {
			setDateCreated(undefined)
			setCreatedBy('')
			setMessage('')
		}
	}, [editMessage])

	const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault()
		try {
			const data = {
				uid: editMessage!.uid,
				message,
				popupFunctions,
			}

			await saveMessage(data)
			setDateCreated(undefined)
			setCreatedBy('')
			setMessage('')
			onSubmit()
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<TEPopupForm
			visible={visible}
			onClose={onClose}
			onSubmit={handleSubmit}
			onSubmitTitle='Save Message'
		>
			<TEPopupTitle>Edit Message</TEPopupTitle>
			<TEDatetimeRow
				labelForKey='editDateCreated'
				title='Date Created'
				value={dateCreated}
				onChange={() => {}}
				required
				disabled
			/>
			<TEInputRow
				labelForKey='editCreatedBy'
				title='Name'
				value={createdBy}
				onChange={() => {}}
				required
				disabled
			/>
			<TETextareaRow
				labelForKey='editMessage'
				title='Message'
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				required
			/>
		</TEPopupForm>
	)
}
