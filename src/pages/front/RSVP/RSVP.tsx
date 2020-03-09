import React, { useState } from 'react'
import {
	// TEForm,
	TEInputRow,
	// TESelectRow,
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
import { /*saveRSVP,*/ saveMessage } from './requests'
import { useMessages } from 'pages/admin/Messages/hooks'

export const RSVP = () => {
	const popupFunctions = useTEPopups()
	const { messageArray } = useMessages()
	// const [rsvpName, setRSVPName] = useState('')
	// const [rsvpFood, setRSVPFood] = useState<{ value: string; label: string }>()
	// const [rsvpComment, setRSVPComment] = useState('')

	const [messageName, setMessageName] = useState('')
	const [messageMessage, setMessageMessage] = useState('')
	const [showMessage, setShowMessage] = useState('Displayed publicly on the website.')

	// const handleSubmitRSVP = async (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault()
	// 	try {
	// 		const data = {
	// 			name: rsvpName,
	// 			foodChoice: rsvpFood,
	// 			comment: rsvpComment,
	// 			popupFunctions,
	// 		}
	// 		await saveRSVP(data)
	// 		setRSVPName('')
	// 		setRSVPFood(undefined)
	// 		setRSVPComment('')
	// 	} catch (e) {
	// 		console.log(e)
	// 	}
	// }
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
					{/* <RSVPCopy>
						We are excited to have you at our wedding. Please RSVP below so we know you
						will be joining us and what you will be eating.
					</RSVPCopy> */}
					<RSVPCopy>
						Once invitations go out, you can return to this page and submit your RSVP.
					</RSVPCopy>
					{/* <TEForm onSubmit={handleSubmitRSVP}>
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
								{ label: 'Prime Rib', value: 'Prime Rib' },
								{ label: 'Chicken', value: 'Chicken' },
								{ label: 'Fish', value: 'Fish' },
								{ label: 'Pasta', value: 'Pasta' },
								{ label: 'Mac and Cheese', value: 'Mac and Cheese' },
								{ label: 'Other (please leave a comment below)', value: 'other' },
							]}
							onChange={(option) =>
								setRSVPFood(option as undefined | { value: string; label: string })
							}
							required
							rowSize='half'
							last
						/>
						<TETextareaRow
							labelForKey='rsvpComment'
							title='Diatary Restrictions or Other Comments'
							value={rsvpComment}
							onChange={(e) => setRSVPComment(e.target.value)}
						/>
						<TEButton type='submit'>Submit</TEButton>
					</TEForm> */}
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
