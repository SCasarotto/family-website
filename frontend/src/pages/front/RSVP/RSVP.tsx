import React, { useState } from 'react'
import {
	TEForm,
	TEInputRow,
	TESelectRow,
	TETextareaRow,
	TEButton,
	useTEPopups,
	TESegmentedGroup,
} from 'react-tec'

import { PageWrapper } from 'components'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	RSVPSection,
	RSVPContainer,
	RSVPTitle,
	RSVPCopy,
	RSVPFormSectionTitle,
	RSVPFormSectionCopy,
	MessageSection,
	MessageContainer,
	MessageTitle,
	MessageCopy,
	MessageForm,
	MessageBoardWrapper,
	MessageBoardItem,
	MessageBoardMessage,
	MessageBoardName,
} from './styledComponents'
import { saveRSVP, saveMessage } from './requests'
import { useMessages } from './hooks'

export const RSVP = () => {
	const popupFunctions = useTEPopups()
	const { messageArray } = useMessages()
	const [rsvpName, setRSVPName] = useState('')
	const [rsvpFood, setRSVPFood] = useState<{ value: string; label: string } | null>(null)
	const [rsvpComment, setRSVPComment] = useState('')
	const [rsvpToast, setRSVPToast] = useState('')
	const [rsvpVaccinated, setRSVPVaccinated] = useState('')
	const [rsvpWillingToTest, setRSVPWillingToTest] = useState('')
	const [rsvpPassword, setRSVPPassword] = useState('')

	const [messageName, setMessageName] = useState('')
	const [messageMessage, setMessageMessage] = useState('')
	const [showMessage, setShowMessage] = useState('Displayed publicly on the website.')

	const handleSubmitRSVP = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (rsvpPassword !== 'SCCT71021') {
			popupFunctions.showAlert({
				title: 'Incorrect Password',
				message: 'Check your wedding invitation and try again.',
			})
			return
		}
		try {
			const data = {
				name: rsvpName,
				foodChoice: rsvpFood,
				comment: rsvpComment,
				toast: rsvpToast,
				vaccinated: rsvpVaccinated,
				willingToTest: rsvpWillingToTest,
				popupFunctions,
			}
			await saveRSVP(data)
			setRSVPName('')
			setRSVPFood(null)
			setRSVPComment('')
			setRSVPToast('')
			setRSVPVaccinated('')
			setRSVPWillingToTest('')
			setRSVPPassword('')
		} catch (e) {
			console.log(e)
			alert(
				'An error occured while attempting to save your RSVP. If this continues to occur reach out to Stuart or Courtney. Thanks!',
			)
		}
	}
	const handleSubmitMessgae = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const data = {
				name: messageName,
				message: messageMessage,
				showMessage,
				popupFunctions,
			}
			await saveMessage(data)
			setMessageName('')
			setMessageMessage('')
			setShowMessage('Displayed publicly on the website.')
		} catch (e) {
			console.log(e)
			alert(
				'An error occured while attempting to submit your message. If this continues to occur reach out to Stuart or Courtney. Thanks!',
			)
		}
	}

	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>We hope to see you there</HeaderTitle>
				</HeaderContent>
			</Header>
			<RSVPSection>
				<RSVPContainer>
					<RSVPTitle>RSVP</RSVPTitle>
					<RSVPCopy>
						We are excited to have you at our wedding. Please RSVP below so we know you
						will be joining us and what you will be eating.
					</RSVPCopy>
					<RSVPCopy>Please enter an RSVP for each individual.</RSVPCopy>
					<TEForm onSubmit={handleSubmitRSVP}>
						<TEInputRow
							labelForKey='rsvpName'
							title='Name'
							value={rsvpName}
							onChange={(e) => setRSVPName(e.target.value)}
							required
							rowSize='half'
						/>
						<TESelectRow
							labelForKey='rsvpFood'
							title='Food Choice'
							value={rsvpFood}
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
								setRSVPFood(option as null | { value: string; label: string })
							}
							required
							isClearable
							rowSize='half'
							last
						/>
						<TETextareaRow
							labelForKey='rsvpComment'
							title='Dietary Restrictions or Other Comments'
							value={rsvpComment}
							onChange={(e) => setRSVPComment(e.target.value)}
						/>
						<TEInputRow
							labelForKey='rsvpPassword'
							title='Wedding Invitation Password'
							value={rsvpPassword}
							onChange={(e) => setRSVPPassword(e.target.value)}
							required
						/>
						<RSVPFormSectionTitle>Stories & Toasts</RSVPFormSectionTitle>
						<RSVPFormSectionCopy>
							We will have time for sharing stories and toasts for the bride and
							groom.
						</RSVPFormSectionCopy>
						<TESegmentedGroup
							labelForKey='toast'
							title='Would you like to speak during that time?'
							buttonArray={['Yes', 'No']}
							checkedValue={rsvpToast}
							onChange={(e) => setRSVPToast(e.target.value)}
							required
						/>
						<RSVPFormSectionTitle>COVID-19</RSVPFormSectionTitle>
						<RSVPFormSectionCopy>
							Under the state of Illinois’ re-openning plan in the Bridge phase,
							capacity limits take into account those who are vaccinated and/or have
							proof of a negative PCR COVID-19 test result. In order to plan
							accordingly, we ask if you can provide the following information:
						</RSVPFormSectionCopy>
						<TESegmentedGroup
							labelForKey='vacinated'
							title='Do you plan to be fully vaccinated by the wedding (July 10th)?'
							buttonArray={['Yes', 'No']}
							checkedValue={rsvpVaccinated}
							onChange={(e) => setRSVPVaccinated(e.target.value)}
							required
						/>
						{rsvpVaccinated === 'No' && (
							<TESegmentedGroup
								labelForKey='willingToTest'
								title='If you are unable to get vaccinated, are you willing to show proof of a negative COVID-19 test the week of the wedding?'
								buttonArray={['Yes', 'No']}
								checkedValue={rsvpWillingToTest}
								onChange={(e) => setRSVPWillingToTest(e.target.value)}
								required
							/>
						)}
						<TEButton type='submit' style={{ marginTop: 20 }}>
							Submit
						</TEButton>
					</TEForm>
				</RSVPContainer>
			</RSVPSection>
			<MessageSection>
				<MessageContainer>
					<MessageTitle>Leave Us A Message</MessageTitle>
					<MessageCopy>
						We would love to hear from you before or after the wedding.
					</MessageCopy>
					<MessageForm onSubmit={handleSubmitMessgae}>
						<TEInputRow
							labelForKey='measageName'
							title='Name'
							value={messageName}
							onChange={(e) => setMessageName(e.target.value)}
							required
						/>
						<TETextareaRow
							labelForKey='messageMessage'
							title='Message'
							value={messageMessage}
							onChange={(e) => setMessageMessage(e.target.value)}
							required
						/>
						<TESegmentedGroup
							labelForKey='editPublic'
							title='I would like my message:'
							buttonArray={[
								'Displayed publicly on the website.',
								'Sent privately to the couple.',
							]}
							checkedValue={showMessage}
							onChange={(e) => setShowMessage(e.target.value)}
							required
						/>
						<TEButton type='submit'>Submit</TEButton>
					</MessageForm>
					<MessageBoardWrapper>
						{messageArray &&
							messageArray.map((m) => {
								const { uid, createdBy, message } = m
								return (
									<MessageBoardItem key={uid}>
										<MessageBoardMessage>{message}</MessageBoardMessage>
										<MessageBoardName>{createdBy}</MessageBoardName>
									</MessageBoardItem>
								)
							})}
					</MessageBoardWrapper>
				</MessageContainer>
			</MessageSection>
		</PageWrapper>
	)
}
