import React, { useState } from 'react'
import { TEInputRow, TEButton, useTEPopups } from 'react-tec'

import {
	Header,
	HeaderContent,
	HeaderTitle,
	PasswordForm,
	PasswordTitle,
	PasswordSubtitle,
	LocationSection,
	LocationContainer,
	LocationLogoWrapper,
	LocationLogo,
	LocationContent,
	LocationTitle,
	LocationCopy,
	LocationLink,
	TimelineSection,
	TimelineContainer,
	TimelineLine,
	TimelineRow,
	TimelineLeftColumn,
	TimelineCenterColumn,
	TimelineRightColumn,
	TimelineTimeTitle,
	TimelineDot,
	TimelineDotIconWrapper,
	TimelineRowTitle,
	TimelineRowCopy,
	HotelSection,
	HotelContent,
	HotelColumnWrapper,
	HotelLeftColumn,
	HotelRightColumn,
	HotelTitle,
	HotelName,
	HotelCopy,
	HotelUl,
	HotelLi,
	HotelLiLink,
	HotelOtherOptionsWrapper,
	HotelSubtitle,
	HotelOptionsList,
	HotelOptionsItem,
} from './styledComponents'
import { PageWrapper } from 'components'
import { eventDetails } from 'config/images'
import { FaHeart, FaHotel, FaBus, FaCocktail, FaMusic } from 'react-icons/fa'

const timelineData = [
	{
		time: '3:00pm',
		title: 'Hotel Check-In',
		copy: (
			<>
				Freshen up and get ready for the big day.
				<br />
				See Information Below
			</>
		),
		Icon: FaHotel,
	},
	{
		time: (
			<>
				3:30pm
				<br />
				4:00pm
			</>
		),
		title: 'Shuttle Pick-Up',
		copy: "Hop a bus ride from the Hampton Inn to the venue so you don't have to drive.",
		Icon: FaBus,
	},
	{
		time: '4:30pm',
		title: 'Ceremony',
		copy: 'Make yourselves comfortable and join us for our special moment.',
		Icon: FaHeart,
	},
	{
		time: '5:00pm',
		title: 'Cocktail Hour',
		copy: 'Kick off the celebration and grab a drink.',
		Icon: FaCocktail,
	},
	{
		time: '6:00pm',
		title: 'Reception',
		copy: 'Join us for dinner, drinks, speeches, and dancing.',
		Icon: FaMusic,
	},
	{
		time: (
			<>
				9:30pm
				<br />
				10:30pm
				<br />
				11:30pm
			</>
		),
		title: 'Shuttle Return',
		copy: 'After celebrating all night long, our bus service will drive you back safely.',
		Icon: FaBus,
	},
]

export const EventDetails = () => {
	const { showAlert } = useTEPopups()
	const [password, setPassword] = useState('')
	const [unlocked, setUnlocked] = useState(false)
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>Be our guest</HeaderTitle>
				</HeaderContent>
			</Header>
			{!unlocked ? (
				<PasswordForm
					onSubmit={(e) => {
						e.preventDefault()
						if (password === 'SCCT71021') {
							setUnlocked(true)
						} else {
							setUnlocked(false)
							showAlert({
								title: 'Incorrect Password',
								message: 'Check the password on your invitation and try again.',
							})
						}
					}}
				>
					<PasswordTitle>Password Required</PasswordTitle>
					<PasswordSubtitle>
						Please enter the password on your wedding invitiation to view event details.
					</PasswordSubtitle>
					<TEInputRow
						labelForKey='password'
						title='Password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<TEButton type='submit'>Submit</TEButton>
				</PasswordForm>
			) : (
				<>
					<LocationSection>
						<LocationContainer>
							<LocationLogoWrapper>
								<LocationLogo src={eventDetails.dcEstate} alt='DC Estate Winery' />
							</LocationLogoWrapper>
							<LocationContent>
								<LocationTitle>Ceremony and Reception</LocationTitle>
								<LocationCopy>
									Please join us on Saturday, July 10th 2021 at DC Estate Winery
									8877 State Line Rd, South Beloit, IL 61080.
								</LocationCopy>
								<LocationLink
									href='https://www.dcestatewinery.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									The Venue
								</LocationLink>
								<LocationLink
									href='https://goo.gl/maps/sBhZoX6aWFAzH65E9'
									target='_blank'
									rel='noopener noreferrer'
								>
									Directions
								</LocationLink>
							</LocationContent>
						</LocationContainer>
					</LocationSection>
					<TimelineSection>
						<TimelineContainer>
							<TimelineLine />
							{timelineData.map((row, index) => {
								const { time, title, copy, Icon } = row
								return (
									<TimelineRow key={index}>
										<TimelineLeftColumn>
											{index % 2 === 0 && (
												<TimelineTimeTitle rightAlign>
													{time}
												</TimelineTimeTitle>
											)}
											{index % 2 === 1 && (
												<>
													<TimelineTimeTitle mobile>
														{time}
													</TimelineTimeTitle>
													<TimelineRowTitle>{title}</TimelineRowTitle>
													<TimelineRowCopy>{copy}</TimelineRowCopy>
												</>
											)}
										</TimelineLeftColumn>
										<TimelineCenterColumn>
											<TimelineDot>
												<TimelineDotIconWrapper>
													<Icon />
												</TimelineDotIconWrapper>
											</TimelineDot>
										</TimelineCenterColumn>
										<TimelineRightColumn>
											{index % 2 === 1 && (
												<TimelineTimeTitle>{time}</TimelineTimeTitle>
											)}
											{index % 2 === 0 && (
												<>
													<TimelineTimeTitle mobile>
														{time}
													</TimelineTimeTitle>
													<TimelineRowTitle>{title}</TimelineRowTitle>
													<TimelineRowCopy>{copy}</TimelineRowCopy>
												</>
											)}
										</TimelineRightColumn>
									</TimelineRow>
								)
							})}
						</TimelineContainer>
					</TimelineSection>
					<HotelSection>
						<HotelContent>
							<HotelColumnWrapper>
								<HotelLeftColumn>
									<iframe
										src='https://www.google.com/maps/d/u/0/embed?mid=19rBn3XhI4Nf9dZg2ziMWAJVNbQv-wUCk'
										width='100%'
										height='500'
										title='Wedding Hotels'
										style={{ border: 'none', borderRadius: '10px' }}
									></iframe>
								</HotelLeftColumn>
								<HotelRightColumn>
									<HotelTitle>Hotel Information</HotelTitle>
									<HotelName>Hampton Inn Beloit (Hilton properties)</HotelName>
									<HotelCopy>
										2700 Cranston Rd, Beloit, WI 53511, for both Friday, July
										9th and Saturday, July 10th. Transportation will pick up and
										drop off here.{' '}
										<b>
											<HotelLiLink href='https://www.hilton.com/en/book/reservation/deeplink/?&ctyhocn=JVLCRHX&groupCode=CHHTCW&arrival=20210709&departure=20210711&cid=OM,WW,HILTONLINK,en,DirectLink&fromId=HILTONLINKDIRECT'>
												Click here to book a room in our room block.
											</HotelLiLink>
										</b>
									</HotelCopy>
									<HotelUl>
										<HotelLi>
											<b>Group Name:</b> Tate-Casarotto Wedding
										</HotelLi>
										<HotelLi>
											<b>Room Block Rate:</b> $169.00
										</HotelLi>
										<HotelLi>
											<b>Book By:</b> 6/5/2021
										</HotelLi>
										<HotelLi>
											<b>Check In:</b> 3:00pm
										</HotelLi>
										<HotelLi>
											<b>Check Out:</b> 12:00pm
										</HotelLi>
									</HotelUl>
									<HotelName>Fairfield Inn & Suites Beloit</HotelName>
									<HotelCopy>
										2784 Milwaukee Road Beloit, Wisconsin 53511, for both
										Friday, July 9th and Saturday, July 10th. Transportation
										will pick up and drop off next door at the Hampton Inn.{' '}
										<b>
											<HotelLiLink
												href='https://www.marriott.com/event-reservations/reservation-link.mi?id=1619709647672&key=GRP&app=resvlink
https://www.marriott.com/event-reservations/reservation-link.mi?id=1619709647672&key=GRP&app=resvlink'
											>
												Click the following link to reserve a room with the
												Fairfield Inn.
											</HotelLiLink>
										</b>
									</HotelCopy>
									<HotelUl>
										<HotelLi>
											<b>Group Name:</b> Tate/Casarotto Wedding Group
										</HotelLi>
										<HotelLi>
											<b>Room Block Rate:</b> $144 - 179 per night
										</HotelLi>
										<HotelLi>
											<b>Book By:</b> 6/5/2021
										</HotelLi>
										<HotelLi>
											<b>Check In:</b> 3:00pm
										</HotelLi>
										<HotelLi>
											<b>Check Out:</b> 12:00pm
										</HotelLi>
									</HotelUl>
									<HotelCopy>
										If the room blocks fill or if you wish to stay elsewhere,
										there are many hotel options to choose from close by.
									</HotelCopy>
								</HotelRightColumn>
							</HotelColumnWrapper>
							<HotelOtherOptionsWrapper>
								<HotelSubtitle>Other Hotel Options</HotelSubtitle>
								<HotelOptionsList>
									<HotelOptionsItem>
										Quality Inn
										<br />
										2786 Milwaukee Rd, Beloit, WI 53511
										<br />
										<HotelLiLink href='tel:+16083622666'>
											(608) 362-2666
										</HotelLiLink>
									</HotelOptionsItem>
									<HotelOptionsItem>
										Super 8 by Wyndham Beloit
										<br />
										2790 Milwaukee Rd, Beloit, WI 53511
										<br />
										<HotelLiLink href='tel:+16083656000'>
											(608) 365-6000
										</HotelLiLink>
									</HotelOptionsItem>
									<HotelOptionsItem>
										Baymont by Wyndham Beloit
										<br />
										2900 Ford St, Beloit, WI 53511
										<br />
										<HotelLiLink href='tel:+16083658680'>
											(608) 365-8680
										</HotelLiLink>
									</HotelOptionsItem>
									<HotelOptionsItem>
										Holiday Inn Express & Suites Beloit
										<br />
										3022 Ford St, Beloit, WI 53511
										<br />
										<HotelLiLink href='tel:+16085194040'>
											(608) 519-4040
										</HotelLiLink>
									</HotelOptionsItem>
								</HotelOptionsList>
							</HotelOtherOptionsWrapper>
						</HotelContent>
					</HotelSection>
				</>
			)}
		</PageWrapper>
	)
}
