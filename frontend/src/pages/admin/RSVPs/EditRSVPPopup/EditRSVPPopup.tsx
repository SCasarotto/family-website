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
	const [toast, setToast] = useState('')
	const [vaccinated, setVaccinated] = useState('')
	const [willingToTest, setWillingToTest] = useState('')

	useEffect(() => {
		if (editRSVP) {
			const {
				dateCreated,
				name,
				foodChoice,
				comment,
				status,
				toast,
				vaccinated,
				willingToTest,
			} = editRSVP

			setDateCreated(dateCreated ? new Date(dateCreated) : undefined)
			setName(name)
			setFoodChoice({ label: foodChoice, value: foodChoice })
			setComment(comment)
			setStatus(status)
			setToast(toast)
			setVaccinated(vaccinated)
			setWillingToTest(willingToTest)
		} else {
			setDateCreated(undefined)
			setName('')
			setFoodChoice(undefined)
			setComment('')
			setStatus(undefined)
			setToast('')
			setVaccinated('')
			setWillingToTest('')
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
				toast,
				vaccinated,
				willingToTest,
				popupFunctions,
			}

			await saveRSVP(data)
			setDateCreated(undefined)
			setName('')
			setFoodChoice(undefined)
			setComment('')
			setStatus(undefined)
			setToast('')
			setVaccinated('')
			setWillingToTest('')
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
					{ label: '8 oz Prime Rib', value: '8 oz Prime Rib' },
					{
						label: 'Atlantic Salmon with Chardonnay Dill Sauce',
						value: 'Atlantic Salmon with Chardonnay Dill Sauce',
					},
					{
						label: 'Herb Chicken with Citrus Butter Sauce',
						value: 'Herb Chicken with Citrus Butter Sauce',
					},
					{
						label: 'Linguini Alfredo and Asiago ',
						value: 'Linguini Alfredo and Asiago ',
					},
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
			<TESegmentedGroup
				labelForKey='toast'
				title='Toast'
				buttonArray={['Yes', 'No']}
				checkedValue={toast}
				onChange={(e) => setToast(e.target.value)}
				required
				inline
			/>
			<TESegmentedGroup
				labelForKey='vacinated'
				title='Vaccinated'
				buttonArray={['Yes', 'No']}
				checkedValue={vaccinated}
				onChange={(e) => setVaccinated(e.target.value)}
				required
				inline
			/>
			<TESegmentedGroup
				labelForKey='willingToTest'
				title='Willing To Test'
				buttonArray={['Yes', 'No']}
				checkedValue={willingToTest}
				onChange={(e) => setWillingToTest(e.target.value)}
				required
				inline
			/>
		</TEPopupForm>
	)
}
