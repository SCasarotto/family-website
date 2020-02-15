import React from 'react'

import {
	Header,
	HeaderContent,
	HeaderTitle,
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
	TimelineDotIcon,
	TimelineRowTitle,
	TimelineRowCopy,
} from './styledComponents'
import { PageWrapper } from 'components'
import { eventDetails } from 'config/images'

const timelineData = [
	{ time: 'TBD', title: 'Hotel Check-In', copy: 'Freshen up and get ready for the big day.' },
	{ time: 'TBD', title: 'Shuttle Pick-Up', copy: "Hop a bus ride so you don't have to drive." },
	{
		time: 'TBD',
		title: 'Ceremony',
		copy: 'Make yourselves comfortable and join us for a special moment.',
	},
	{ time: 'TBD', title: 'Cocktail Hour', copy: 'Kick off the celebration and grab a drink.' },
	{ time: 'TBD', title: 'Reception', copy: 'Join us for dinner, drinks, speaches, and dacing.' },
	{
		time: 'TBD',
		title: 'Shuttle Return',
		copy: 'Easy way to make it back at the end of the night.',
	},
]

export const EventDetails = () => {
	return (
		<PageWrapper>
			<Header>
				<HeaderContent>
					<HeaderTitle>Be our guest</HeaderTitle>
				</HeaderContent>
			</Header>
			<LocationSection>
				<LocationContainer>
					<LocationLogoWrapper>
						<LocationLogo src={eventDetails.dcEstate} alt='DC Estate Winery' />
					</LocationLogoWrapper>
					<LocationContent>
						<LocationTitle>Ceremony and Reception</LocationTitle>
						<LocationCopy>
							Please join us on Saturday, July 18th 2020 at DC Estate Winery 8877
							State Line Rd, South Beloit, IL 61080.
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
						const { time, title, copy } = row
						return (
							<TimelineRow key={index}>
								<TimelineLeftColumn>
									{index % 2 === 0 && (
										<TimelineTimeTitle rightAlign>{time}</TimelineTimeTitle>
									)}
									{index % 2 === 1 && (
										<>
											<TimelineTimeTitle mobile>{time}</TimelineTimeTitle>
											<TimelineRowTitle>{title}</TimelineRowTitle>
											<TimelineRowCopy>{copy}</TimelineRowCopy>
										</>
									)}
								</TimelineLeftColumn>
								<TimelineCenterColumn>
									<TimelineDot>
										<TimelineDotIcon />
									</TimelineDot>
								</TimelineCenterColumn>
								<TimelineRightColumn>
									{index % 2 === 1 && (
										<TimelineTimeTitle>{time}</TimelineTimeTitle>
									)}
									{index % 2 === 0 && (
										<>
											<TimelineTimeTitle mobile>{time}</TimelineTimeTitle>
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
		</PageWrapper>
	)
}
