import React, { useState, useEffect } from 'react'
import {
	TEPopupForm,
	TEInputRow,
	useTEPopups,
	TEDatetimeRow,
	TETextareaRow,
	TESelectRow,
	TESegmentedGroup,
} from 'react-tec'

import { TEPopupTitle } from 'components'
import { RSVP } from 'interfaces'

import { saveRSVP } from './requests'

interface Props {
	visible: boolean
	onClose(): void
	onSubmit(): void
	editRSVP?: RSVP
}
export const EditRSVPPopup = (props: Props) => {
	const { visible, onClose, onSubmit, editRSVP } = props

	const popupFunctions = useTEPopups()
	const [dateCreated, setDateCreated] = useState<Date>()
	const [name, setName] = useState('')
	const [foodChoice, setFoodChoice] = useState<{ label: string; value: string }>()
	const [comment, setComment] = useState('')
	const [status, setStatus] = useState<number>()

	useEffect(() => {
		if (editRSVP) {
			const { dateCreated, name, foodChoice, comment, status } = editRSVP

			setDateCreated(dateCreated ? new Date(dateCreated) : undefined)
			setName(name)
			setFoodChoice({ label: foodChoice, value: foodChoice })
			setComment(comment)
			setStatus(status)
		} else {
			setDateCreated(undefined)
			setName('')
			setFoodChoice(undefined)
			setComment('')
			setStatus(undefined)
		}
	}, [editRSVP])

	const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
		e.preventDefault()
		try {
			const data = {
				uid: editRSVP!.uid,
				name,
				foodChoice: foodChoice?.value,
				comment,
				status,
				popupFunctions,
			}

			await saveRSVP(data)
			setDateCreated(undefined)
			setName('')
			setFoodChoice(undefined)
			setComment('')
			setStatus(undefined)
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
				labelForKey='editName'
				title='Name'
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<TESelectRow
				labelForKey='editFoodChoice'
				title='Food Choice'
				value={foodChoice}
				options={[
					{ label: 'Prime Rib', value: 'Prime Rib' },
					{ label: 'Chicken', value: 'Chicken' },
					{ label: 'Fish', value: 'Fish' },
					{ label: 'Pasta', value: 'Pasta' },
					{ label: 'Mac and Cheese', value: 'Mac and Cheese' },
					{ label: 'Other (please leave a comment below)', value: 'other' },
				]}
				onChange={(option) =>
					setFoodChoice(option as undefined | { value: string; label: string })
				}
				required
			/>
			<TESegmentedGroup
				labelForKey='editStatus'
				title='Status'
				checkedValue={status?.toString() ?? ''}
				buttonArray={[
					{ label: 'Submitted', value: '0', key: 'Submitted' },
					{ label: 'Transferred', value: '1', key: 'Transferred' },
				]}
				onChange={(e) => setStatus(parseInt(e.target.value))}
			/>
			<TETextareaRow
				labelForKey='editComment'
				title='Comment'
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
		</TEPopupForm>
	)
}
